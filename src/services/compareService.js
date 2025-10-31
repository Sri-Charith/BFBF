import pool from '../config/db.js';
import { whereAndParams } from './sqlBuilder.js';

export const compare = async ({ districts = [], year, state } = {}) => {
  const baseFilters = { year, state };
  const { where, params, nextIndex } = whereAndParams(baseFilters);
  let inClause = '';
  let inParams = [];
  if (districts.length) {
    inParams = districts;
    const ph = inParams.map((_, i) => `$${nextIndex + i}`).join(',');
    inClause = ` AND "district_name" IN (${ph})`;
  }
  const q = `SELECT * FROM state_data ${where}${inClause} ORDER BY "district_name"`;
  const { rows } = await pool.query(q, [...params, ...inParams]);
  return { filters: { districts, year, state }, query: q, data: rows };
};


