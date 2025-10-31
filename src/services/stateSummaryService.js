import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS } from '../utils/constants.js';
import { columnExists } from './schemaService.js';
import { buildWhere } from './queryBuilder.js';

export const getStateSummary = async ({ year, metric = 'Total_Exp', limit = 10, state, district } = {}) => {
  if (!ALLOWED_METRICS.has(metric)) {
    throw new Error('Invalid metric');
  }
  if (!(await columnExists(metric))) {
    throw new Error('Metric not available in schema');
  }
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const lim = Math.min(Number(limit) || 10, 100);

  const { where: whereSql, params } = (await import('./sqlBuilder.js')).whereAndParams({ year, state, district });

  const q = `
    WITH scores AS (
      SELECT "district_name", ${agg}("${metric}") as value
      FROM state_data
      ${whereSql}
      GROUP BY "district_name"
    )
    SELECT
      (
        SELECT json_agg(t)
        FROM (
          SELECT * FROM scores ORDER BY value DESC LIMIT ${lim}
        ) t
      ) AS top,
      (
        SELECT json_agg(b)
        FROM (
          SELECT * FROM scores ORDER BY value ASC LIMIT ${lim}
        ) b
      ) AS bottom
  `;
  const { rows } = await pool.query(q, params);
  const data = rows[0] || { top: [], bottom: [] };
  return { filters: { year, metric, limit, state, district }, query: q, data };
};


