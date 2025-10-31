import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS, DEFAULT_DASHBOARD_METRICS } from '../utils/constants.js';
import { getPreviousFinYear, toNumber, formatChangePct } from '../utils/helpers.js';

const getStateForDistrict = async (districtName) => {
  const q = 'SELECT DISTINCT "state_name" FROM state_data WHERE "district_name" = $1 LIMIT 1';
  const { rows } = await pool.query(q, [districtName]);
  return rows[0]?.state_name || null;
};

const getMetricValue = async (district, year, metric) => {
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const sql = `SELECT ${agg}("${metric}") as value FROM state_data WHERE "district_name" = $1 AND "fin_year" = $2`;
  const { rows } = await pool.query(sql, [district, year]);
  return toNumber(rows[0]?.value);
};

const getMetricRankInState = async (state, district, year, metric) => {
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const sql = `
    WITH ranked AS (
      SELECT "district_name", ${agg}("${metric}") as value,
             RANK() OVER (ORDER BY ${agg}("${metric}") DESC) as rnk
      FROM state_data
      WHERE "state_name" = $1 AND "fin_year" = $2
      GROUP BY "district_name"
    )
    SELECT rnk FROM ranked WHERE "district_name" = $3
  `;
  const { rows } = await pool.query(sql, [state, year, district]);
  return rows[0]?.rnk ? Number(rows[0].rnk) : null;
};

export const buildDashboard = async ({ districtId, year, metrics }) => {
  // Interpret districtId as district_name in current schema
  const district = districtId;
  // Determine metrics list
  let metricsList = metrics && metrics.length ? metrics : DEFAULT_DASHBOARD_METRICS;
  if (metricsList.length !== 5) {
    throw new Error('Exactly 5 metrics are required');
  }
  // Validate
  for (const m of metricsList) {
    if (!ALLOWED_METRICS.has(m)) {
      throw new Error(`Invalid metric: ${m}`);
    }
  }

  const state = await getStateForDistrict(district);
  if (!state) {
    throw new Error('District not found');
  }

  const prevYear = getPreviousFinYear(year);

  const results = [];
  for (const m of metricsList) {
    const valueNow = await getMetricValue(district, year, m);
    const valuePrev = prevYear ? await getMetricValue(district, prevYear, m) : 0;
    const change_vs_last_year = prevYear ? formatChangePct(valueNow, valuePrev) : '+0.0%';
    const rank = await getMetricRankInState(state, district, year, m);
    results.push({ name: m, value: valueNow, change_vs_last_year, rank_in_state: rank });
  }

  return { district, state, year, metrics: results };
};


