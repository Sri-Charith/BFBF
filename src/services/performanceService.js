import pool from '../config/db.js';

export const getDistrictList = async () => {
  const q = 'SELECT DISTINCT "district_name" FROM state_data ORDER BY "district_name" ASC';
  const { rows } = await pool.query(q);
  return rows.map(r => r.district_name);
};

export const getYears = async () => {
  const { rows } = await pool.query('SELECT DISTINCT "fin_year" FROM state_data ORDER BY "fin_year" ASC');
  return rows.map(r => r.fin_year);
};

export const getPerformanceForDistrictYear = async (district, year) => {
  const sql = `
    SELECT
      SUM("Approved_Labour_Budget") as "Approved_Labour_Budget",
      SUM("Total_Exp") as "Total_Exp",
      SUM("Material_and_skilled_Wages") as "Material_and_skilled_Wages",
      SUM("Wages") as "Wages",
      AVG("Average_days_of_employment_provided_per_Household") as "Average_days_of_employment_provided_per_Household",
      AVG("Average_Wage_rate_per_day_per_person") as "Average_Wage_rate_per_day_per_person",
      SUM("Number_of_Completed_Works") as "Number_of_Completed_Works",
      SUM("Number_of_Ongoing_Works") as "Number_of_Ongoing_Works",
      SUM("Total_No_of_Works_Takenup") as "Total_No_of_Works_Takenup",
      SUM(COALESCE("SC_persondays",0)) as "SC_persondays",
      SUM(COALESCE("ST_persondays",0)) as "ST_persondays",
      SUM(COALESCE("Women_Persondays",0)) as "Women_Persondays",
      SUM(COALESCE("Total_Individuals_Worked",0)) as "Total_Individuals_Worked",
      AVG("percentage_payments_gererated_within_15_days") as "percentage_payments_gererated_within_15_days"
    FROM state_data
    WHERE "district_name" = $1 AND "fin_year" = $2
  `;
  const { rows } = await pool.query(sql, [district, year]);
  return rows[0] || null;
};


