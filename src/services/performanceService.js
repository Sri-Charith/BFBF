import pool from '../config/db.js';
import { whereAndParams } from './sqlBuilder.js';

export const getDistrictList = async (filters = {}) => {
  const { where, params } = whereAndParams({ state: filters.state });
  const q = `SELECT DISTINCT "district_name" FROM state_data ${where} ORDER BY "district_name" ASC`;
  const { rows } = await pool.query(q, params);
  return rows.map(r => r.district_name);
};

export const getYears = async (filters = {}) => {
  const { where, params } = whereAndParams({ state: filters.state, district: filters.district });
  const { rows } = await pool.query(`SELECT DISTINCT "fin_year" FROM state_data ${where} ORDER BY "fin_year" ASC`, params);
  return rows.map(r => r.fin_year);
};

export const getPerformance = async (filters = {}) => {
  const { where, params } = whereAndParams({
    year: filters.year,
    district: filters.district,
    state: filters.state
  });
  const q = `SELECT * FROM state_data ${where}`;
  const { rows } = await pool.query(q, params);
  return { filters, query: q, data: rows };
};


