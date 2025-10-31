import pool from '../config/db.js';
import { toNumber, pct } from '../utils/helpers.js';

export const getInsights = async (district, year) => {
  const sql = `
    SELECT
      SUM("Approved_Labour_Budget") as "Approved_Labour_Budget",
      SUM("Total_Exp") as "Total_Exp",
      SUM("Total_No_of_Works_Takenup") as "Total_No_of_Works_Takenup",
      SUM("Number_of_Completed_Works") as "Number_of_Completed_Works",
      SUM(COALESCE("SC_persondays",0)) as "SC_persondays",
      SUM(COALESCE("ST_persondays",0)) as "ST_persondays",
      SUM(COALESCE("Women_Persondays",0)) as "Women_Persondays",
      SUM(COALESCE("Total_Individuals_Worked",0)) as "Total_Individuals_Worked",
      AVG("percentage_payments_gererated_within_15_days") as "percentage_payments_gererated_within_15_days"
    FROM state_data
    WHERE "district_name" = $1 AND "fin_year" = $2
  `;
  const { rows } = await pool.query(sql, [district, year]);
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

  return { inputs: d, insights };
};


