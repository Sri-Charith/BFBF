import pool from '../config/db.js';
import { ALLOWED_METRICS, AVG_METRICS } from '../utils/constants.js';

export const getTrend = async (district, metric) => {
  if (!ALLOWED_METRICS.has(metric)) {
    throw new Error('Invalid metric');
  }
  const agg = AVG_METRICS.has(metric) ? 'AVG' : 'SUM';
  const sql = `
    SELECT "fin_year", ${agg}("${metric}") as value
    FROM state_data
    WHERE "district_name" = $1
    GROUP BY "fin_year"
    ORDER BY "fin_year"
  `;
  const { rows } = await pool.query(sql, [district]);
  return rows;
};


