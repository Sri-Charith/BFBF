import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS } from '../utils/constants.js';
import { columnExists } from './schemaService.js';
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


