import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS } from '../utils/constants.js';
import { columnExists, getStateDataColumns } from './schemaService.js';
import { whereAndParams } from './sqlBuilder.js';

export const getTrend = async ({ metric, district, state } = {}) => {
  if (!ALLOWED_METRICS.has(metric)) {
    throw new Error('Invalid metric');
  }
  if (!(await columnExists(metric))) {
    throw new Error('Metric not available in schema');
  }
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const { where, params } = whereAndParams({ district, state });
  const q = `SELECT "fin_year", ${agg}("${metric}") as value FROM state_data ${where} GROUP BY "fin_year" ORDER BY "fin_year"`;
  const { rows } = await pool.query(q, params);
  return { filters: { metric, district, state }, query: q, data: rows };
};

export const getTrendsMulti = async ({ metrics = [], district, state } = {}) => {
  if (!Array.isArray(metrics) || metrics.length === 0) {
    throw new Error('metrics array is required and must not be empty');
  }

  // Validate all metrics first
  for (const metric of metrics) {
    if (!ALLOWED_METRICS.has(metric)) {
      throw new Error(`Invalid metric: ${metric}`);
    }
  }

  // Check which metrics exist in schema (batch check)
  const schemaCols = await getStateDataColumns();
  const validMetrics = metrics.filter(m => schemaCols.has(m));
  
  if (validMetrics.length === 0) {
    throw new Error('No valid metrics found in schema');
  }

  // Execute all queries in parallel for maximum performance
  const { where, params: baseParams } = whereAndParams({ district, state });
  
  const promises = validMetrics.map(async (metric) => {
    const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
    const q = `SELECT "fin_year", ${agg}("${metric}") as value FROM state_data ${where} GROUP BY "fin_year" ORDER BY "fin_year"`;
    const { rows } = await pool.query(q, baseParams);
    return { metric, data: rows };
  });

  const results = await Promise.all(promises);
  
  return {
    filters: { metrics: validMetrics, district, state },
    data: results
  };
};


