import pool from '../config/db.js';
import { buildWhere } from './queryBuilder.js';
import { getStateDataColumns } from './schemaService.js';

export const getDistrictList = async (filters = {}) => {
  const { sql, params } = buildWhere({ state: filters.state });
  const q = `SELECT DISTINCT "district_name" FROM state_data ${sql} ORDER BY "district_name" ASC`;
  const { rows } = await pool.query(q, params);
  return rows.map(r => r.district_name);
};

export const getYears = async (filters = {}) => {
  const { sql, params } = buildWhere({ state: filters.state, district: filters.district });
  const { rows } = await pool.query(`SELECT DISTINCT "fin_year" FROM state_data ${sql} ORDER BY "fin_year" ASC`, params);
  return rows.map(r => r.fin_year);
};

export const getPerformance = async (filters = {}) => {
  const cols = await getStateDataColumns();
  const sumCols = [
    'Approved_Labour_Budget','Total_Exp','Material_and_skilled_Wages','Wages',
    'Number_of_Completed_Works','Number_of_Ongoing_Works','Total_No_of_Works_Takenup',
    'SC_persondays','ST_persondays','Women_Persondays','Total_Individuals_Worked'
  ].filter(c => cols.has(c));
  const avgCols = [
    'Average_days_of_employment_provided_per_Household','Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days'
  ].filter(c => cols.has(c));
  const selectParts = [
    ...sumCols.map(c => `SUM("${c}") as "${c}"`),
    ...avgCols.map(c => `AVG("${c}") as "${c}"`)
  ];
  if (!selectParts.length) return null;
  const { sql, params } = buildWhere({
    year: filters.year,
    district: filters.district,
    state: filters.state
  });
  const q = `SELECT ${selectParts.join(',\n      ')} FROM state_data ${sql}`;
  const { rows } = await pool.query(q, params);
  return rows[0] || null;
};


