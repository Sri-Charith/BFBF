import pool from '../config/db.js';
import { buildWhere } from './queryBuilder.js';
import { getStateDataColumns } from './schemaService.js';

export const compare = async ({ districts = [], year, state } = {}) => {
  const cols = await getStateDataColumns();
  const sumCols = [
    'Approved_Labour_Budget','Total_Exp','Material_and_skilled_Wages','Wages',
    'Number_of_Completed_Works','Number_of_Ongoing_Works','Total_No_of_Works_Takenup',
    'SC_persondays','ST_persondays','Women_Persondays'
  ].filter(c => cols.has(c));
  const avgCols = [
    'Average_days_of_employment_provided_per_Household','Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days'
  ].filter(c => cols.has(c));
  const selectParts = [
    '"district_name"',
    ...sumCols.map(c => `SUM("${c}") as "${c}"`),
    ...avgCols.map(c => `AVG("${c}") as "${c}"`)
  ];
  const baseFilters = { year, state };
  const { sql, params } = buildWhere(baseFilters);
  let inClause = '';
  let inParams = [];
  if (districts.length) {
    inParams = districts;
    const ph = inParams.map((_, i) => `$${params.length + i + 1}`).join(',');
    inClause = `${sql ? ' AND' : 'WHERE'} "district_name" IN (${ph})`;
  }
  const q = `
    SELECT
      ${selectParts.join(',\n      ')}
    FROM state_data
    ${sql} ${inClause}
    GROUP BY "district_name"
    ORDER BY "district_name"
  `;
  const { rows } = await pool.query(q, [...params, ...inParams]);
  return rows;
};


