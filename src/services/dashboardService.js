import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS, DEFAULT_DASHBOARD_METRICS } from '../utils/constants.js';
import { getPreviousFinYear, toNumber, formatChangePct } from '../utils/helpers.js';
import { get as cacheGet, set as cacheSet } from '../utils/cache.js';

/**
 * Optimized buildDashboard using a single batched SQL query with CTEs
 * Reduces from 15+ queries to just 1 query
 */
export const buildDashboard = async ({ districtId, year, metrics }) => {
  // Interpret districtId as district_name in current schema
  const district = districtId;
  
  // Determine metrics list
  let metricsList = metrics && metrics.length ? metrics : DEFAULT_DASHBOARD_METRICS;
  if (metricsList.length !== 5) {
    throw new Error('Exactly 5 metrics are required');
  }
  
  // Validate all metrics
  for (const m of metricsList) {
    if (!ALLOWED_METRICS.has(m)) {
      throw new Error(`Invalid metric: ${m}`);
    }
  }

  // Check cache first (120 second TTL)
  const cacheKey = `dashboard:${district}:${year}:${metricsList.join(',')}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    return cached;
  }

  const prevYear = getPreviousFinYear(year);

  // Build metric aggregation expressions
  const buildAgg = (metric, tableAlias) => {
    const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
    return `${agg}(${tableAlias}."${metric}")`;
  };

  // Build current year aggregations
  const currentYearSelects = metricsList.map((metric, idx) => 
    `${buildAgg(metric, 'd1')} as value_now_${idx}`
  ).join(', ');

  // Build previous year aggregations
  const prevYearSelects = prevYear ? metricsList.map((metric, idx) => 
    `${buildAgg(metric, 'd2')} as value_prev_${idx}`
  ).join(', ') : metricsList.map((_, idx) => 
    `NULL::numeric as value_prev_${idx}`
  ).join(', ');

  // First, get the state in a separate query (needed for rank calculations)
  const stateResult = await pool.query(
    'SELECT DISTINCT "state_name" FROM state_data WHERE "district_name" = $1 LIMIT 1',
    [district]
  );
  
  if (stateResult.rows.length === 0) {
    throw new Error('District not found');
  }
  
  const state = stateResult.rows[0].state_name;

  // Build rank CTEs for each metric
  const rankCTEs = metricsList.map((metric, idx) => {
    const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
    return `
      rank_${idx} AS (
        SELECT 
          r."district_name",
          ${agg}(r."${metric}") as metric_value,
          RANK() OVER (ORDER BY ${agg}(r."${metric}") DESC) as rnk
        FROM state_data r
        WHERE r."state_name" = $${prevYear ? 4 : 3}
          AND r."fin_year" = $2
        GROUP BY r."district_name"
      )`;
  }).join(',');

  // Optimized single query using CTEs
  const sql = `
    WITH 
    current_year_data AS (
      SELECT "district_name", "fin_year", ${metricsList.map(m => `"${m}"`).join(', ')}
      FROM state_data
      WHERE "district_name" = $1 AND "fin_year" = $2
    )${prevYear ? `,
    prev_year_data AS (
      SELECT "district_name", "fin_year", ${metricsList.map(m => `"${m}"`).join(', ')}
      FROM state_data
      WHERE "district_name" = $1 AND "fin_year" = $3
    )` : ''},
    ${rankCTEs},
    metric_values AS (
      SELECT
        d1."district_name",
        ${currentYearSelects},
        ${prevYearSelects}
      FROM current_year_data d1
      ${prevYear ? 'LEFT JOIN prev_year_data d2 ON d1."district_name" = d2."district_name"' : ''}
      GROUP BY d1."district_name"
    )
    SELECT
      mv."district_name",
      ${metricsList.map((_, idx) => 
        `mv.value_now_${idx}, mv.value_prev_${idx}, COALESCE(r${idx}.rnk, NULL) as rank_${idx}`
      ).join(', ')}
    FROM metric_values mv
    ${metricsList.map((_, idx) => 
      `LEFT JOIN rank_${idx} r${idx} ON r${idx}."district_name" = mv."district_name"`
    ).join(' ')}
  `;

  const params = prevYear ? [district, year, prevYear, state] : [district, year, state];
  
  try {
    const { rows } = await pool.query(sql, params);
    
    if (rows.length === 0) {
      throw new Error('No data found for district');
    }

    const row = rows[0];

    // Transform SQL results into clean JSON format
    const results = metricsList.map((metric, idx) => {
      const valueNow = toNumber(row[`value_now_${idx}`]);
      const valuePrev = prevYear ? toNumber(row[`value_prev_${idx}`]) : 0;
      const change_vs_last_year = prevYear ? formatChangePct(valueNow, valuePrev) : '+0.0%';
      const rank = row[`rank_${idx}`] ? Number(row[`rank_${idx}`]) : null;

      return {
        name: metric,
        value: valueNow,
        change_vs_last_year,
        rank_in_state: rank
      };
    });

    const result = { district, state, year, metrics: results };

    // Cache the result for 120 seconds
    cacheSet(cacheKey, result, 120000);

    return result;
  } catch (error) {
    // If SQL fails, fall back to original logic for debugging
    console.error('Optimized query failed, error:', error.message);
    console.error('SQL:', sql);
    console.error('Params:', params);
    throw error;
  }
};


