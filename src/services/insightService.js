import pool from '../config/db.js';
import { toNumber, pct } from '../utils/helpers.js';
import { whereAndParams } from './sqlBuilder.js';
import { getStateDataColumns } from './schemaService.js';

export const getInsights = async (filters = {}) => {
  const cols = await getStateDataColumns();
  const { where, params } = whereAndParams({ year: filters.year, district: filters.district, state: filters.state });
  const sumCols = [
    'Approved_Labour_Budget','Total_Exp','Total_No_of_Works_Takenup','Number_of_Completed_Works',
    'SC_persondays','ST_persondays','Women_Persondays','Total_Individuals_Worked'
  ].filter(c => cols.has(c));
  const avgCols = [ 'percentage_payments_gererated_within_15_days' ].filter(c => cols.has(c));
  const selectParts = [
    ...sumCols.map(c => `SUM("${c}") as "${c}"`),
    ...avgCols.map(c => `AVG("${c}") as "${c}"`)
  ];
  const q = `SELECT ${selectParts.join(',\n      ')} FROM state_data ${where}`;
  const { rows } = await pool.query(q, params);
  const d = rows[0] || {};
  const approved = toNumber(d.Approved_Labour_Budget);
  const exp = toNumber(d.Total_Exp);
  const worksTaken = toNumber(d.Total_No_of_Works_Takenup);
  const worksCompleted = toNumber(d.Number_of_Completed_Works);
  const sc = toNumber(d.SC_persondays);
  const st = toNumber(d.ST_persondays);
  const women = toNumber(d.Women_Persondays);
  const totalIndividuals = toNumber(d.Total_Individuals_Worked);
  const payment15 = toNumber(d.percentage_payments_gererated_within_15_days);

  const insights = {
    budget_utilization_pct: pct(exp, approved),
    work_completion_pct: pct(worksCompleted, worksTaken),
    inclusivity_index_pct: pct(sc + st + women, totalIndividuals),
    payment_timeliness_pct: payment15
  };

  return { filters, query: q, data: { inputs: d, insights } };
};


