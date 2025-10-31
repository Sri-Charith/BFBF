import pool from '../config/db.js';

export const compareTwoDistricts = async (district1, district2, year) => {
  const sql = `
    SELECT
      "district_name",
      SUM("Approved_Labour_Budget") as "Approved_Labour_Budget",
      SUM("Total_Exp") as "Total_Exp",
      SUM("Material_and_skilled_Wages") as "Material_and_skilled_Wages",
      SUM("Wages") as "Wages",
      AVG("Average_days_of_employment_provided_per_Household") as "Average_days_of_employment_provided_per_Household",
      AVG("Average_Wage_rate_per_day_per_person") as "Average_Wage_rate_per_day_per_person",
      SUM("Number_of_Completed_Works") as "Number_of_Completed_Works",
      SUM("Number_of_Ongoing_Works") as "Number_of_Ongoing_Works",
      SUM("Total_No_of_Works_Takenup") as "Total_No_of_Works_Takenup",
      SUM("SC_persondays") as "SC_persondays",
      SUM("ST_persondays") as "ST_persondays",
      SUM("Women_Persondays") as "Women_Persondays",
      AVG("percentage_payments_gererated_within_15_days") as "percentage_payments_gererated_within_15_days"
    FROM state_data
    WHERE "district_name" IN ($1, $2)
      ${year ? 'AND "fin_year" = $3' : ''}
    GROUP BY "district_name"
  `;
  const params = year ? [district1, district2, year] : [district1, district2];
  const { rows } = await pool.query(sql, params);
  return rows;
};


