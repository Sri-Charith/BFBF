import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS } from '../utils/constants.js';

export const getStateSummary = async ({ year, metric = 'Total_Exp', limit = 10, state }) => {
  if (!ALLOWED_METRICS.has(metric)) {
    throw new Error('Invalid metric');
  }
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const lim = Math.min(Number(limit) || 10, 100);

  const params = [year];
  let where = 'WHERE "fin_year" = $1';
  if (state) {
    params.push(state);
    where += ` AND "state_name" = $${params.length}`;
  }

  const sql = `
    WITH scores AS (
      SELECT "district_name", ${agg}("${metric}") as value
      FROM state_data
      ${where}
      GROUP BY "district_name"
    )
    SELECT
      (SELECT json_agg(s ORDER BY s.value DESC LIMIT ${lim}) FROM scores s) AS top,
      (SELECT json_agg(s ORDER BY s.value ASC  LIMIT ${lim}) FROM scores s) AS bottom
  `;
  const { rows } = await pool.query(sql, params);
  return rows[0] || { top: [], bottom: [] };
};


