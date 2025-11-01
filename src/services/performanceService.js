import pool from '../config/db.js';
import { whereAndParams } from './sqlBuilder.js';
import { AVG_METRICS } from '../utils/constants.js';

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

  // Build aggregation expressions: AVG for percentage/average metrics, SUM for totals
  // Use COALESCE to handle NULL aggregation results
  const buildAgg = (col) => {
    if (AVG_METRICS.has(col)) {
      return `COALESCE(AVG("${col}"), 0) AS "${col}"`;
    }
    return `COALESCE(SUM("${col}"), 0) AS "${col}"`;
  };

  const q = `
    SELECT 
      MIN("district_name") AS "district_name",
      MIN("state_name") AS "state_name",
      MIN("fin_year") AS "fin_year",
      ${buildAgg('Approved_Labour_Budget')},
      ${buildAgg('Average_Wage_rate_per_day_per_person')},
      ${buildAgg('Average_days_of_employment_provided_per_Household')},
      ${buildAgg('Differently_abled_persons_worked')},
      ${buildAgg('Material_and_skilled_Wages')},
      ${buildAgg('Number_of_Completed_Works')},
      ${buildAgg('Number_of_GPs_with_NIL_exp')},
      ${buildAgg('Number_of_Ongoing_Works')},
      ${buildAgg('Persondays_of_Central_Liability_so_far')},
      ${buildAgg('SC_persondays')},
      ${buildAgg('SC_workers_against_active_workers')},
      ${buildAgg('ST_persondays')},
      ${buildAgg('ST_workers_against_active_workers')},
      ${buildAgg('Total_Adm_Expenditure')},
      ${buildAgg('Total_Exp')},
      ${buildAgg('Total_Households_Worked')},
      ${buildAgg('Total_Individuals_Worked')},
      ${buildAgg('Total_No_of_Active_Job_Cards')},
      ${buildAgg('Total_No_of_Active_Workers')},
      ${buildAgg('Total_No_of_HHs_completed_100_Days_of_Wage_Employment')},
      ${buildAgg('Total_No_of_JobCards_issued')},
      ${buildAgg('Total_No_of_Workers')},
      ${buildAgg('Total_No_of_Works_Takenup')},
      ${buildAgg('Wages')},
      ${buildAgg('Women_Persondays')},
      ${buildAgg('percent_of_Category_B_Works')},
      ${buildAgg('percent_of_Expenditure_on_Agriculture_Allied_Works')},
      ${buildAgg('percent_of_NRM_Expenditure')},
      ${buildAgg('percentage_payments_gererated_within_15_days')},
      MAX("Remarks") AS "Remarks"
    FROM state_data
    ${where}
    GROUP BY "district_name", "state_name", "fin_year"
    LIMIT 200
  `;

  const { rows } = await pool.query(q, params);

  // Convert BigInt and Decimal values to numbers/strings for JSON serialization
  const processedRows = rows.map(row => {
    const processed = {};
    for (const [key, value] of Object.entries(row)) {
      if (value === null || value === undefined) {
        processed[key] = null;
      } else if (typeof value === 'bigint') {
        processed[key] = Number(value);
      } else if (typeof value === 'object' && value.constructor && value.constructor.name === 'Decimal') {
        processed[key] = Number(value);
      } else if (typeof value === 'object' && value.toString) {
        // Handle Decimal type from pg library
        try {
          processed[key] = Number(value.toString());
        } catch (e) {
          processed[key] = value;
        }
      } else {
        processed[key] = value;
      }
    }
    return processed;
  });

  return processedRows;
};




