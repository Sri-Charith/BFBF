require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors package

// --- CONFIG ---
const app = express();
const port = 4000; // Common port for backend APIs

// Use CORS
// This allows your React app (running on a different port)
// to make requests to this backend.
app.use(cors()); 

// Create a database connection pool
// This uses your Neon connection string
// Create a database connection pool
const pool = new Pool({
    // It will now read the URL from your .env file!
    connectionString: process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false
    }
  });

// --- API ENDPOINTS ---

app.get('/', (req, res) => {
  res.send({ message: "Welcome to the state_data API" });
});

// Endpoint to get all data for one district
app.get('/district/:district_name', async (req, res) => {
  const { district_name } = req.params;
  try {
    // IMPORTANT: Note the double quotes "" around column names!
    const query = 'SELECT * FROM state_data WHERE "district_name" = $1';
    const result = await pool.query(query, [district_name]);
    
    res.json({ district: district_name, data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to compare two districts (supports a specific financial year)
// Example: /compare?district1=A&district2=B&year=2023-2024
app.get('/compare', async (req, res) => {
  const { district1, district2, year } = req.query; 

  if (!district1 || !district2) {
    return res.status(400).json({ error: "Please provide two districts to compare" });
  }

  // Aggregate yearly performance for both districts
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
  try {
    const params = year ? [district1, district2, year] : [district1, district2];
    const result = await pool.query(sql, params);
    res.json({ year: year || 'all', comparison_data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a list of all unique district names
app.get('/districts', async (req, res) => {
    try {
        const query = 'SELECT DISTINCT "district_name" FROM state_data ORDER BY "district_name" ASC';
        const result = await pool.query(query);
        // Convert array of objects [ { district_name: 'Adilabad' }, ... ]
        // to a simple array [ 'Adilabad', ... ]
        const districtList = result.rows.map(row => row.district_name);
        res.json(districtList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to get all financial years present in the data
app.get('/years', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT "fin_year" FROM state_data ORDER BY "fin_year" ASC');
    res.json(result.rows.map(r => r.fin_year));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to list measurable metrics grouped by categories
app.get('/metrics', (req, res) => {
  // Server-side definition to keep the API deterministic
  const metrics = {
    Employment: [
      'Average_days_of_employment_provided_per_Household',
      'Total_Individuals_Worked',
      'Number_of_Completed_Works',
      'Number_of_Ongoing_Works',
      'Total_No_of_Works_Takenup'
    ],
    Funds: [
      'Approved_Labour_Budget',
      'Total_Exp',
      'Material_and_skilled_Wages',
      'Wages'
    ],
    Inclusivity: [
      'SC_persondays',
      'ST_persondays',
      'Women_Persondays'
    ],
    Efficiency: [
      'Average_Wage_rate_per_day_per_person',
      'percentage_payments_gererated_within_15_days'
    ]
  };
  const all = [...new Set(Object.values(metrics).flat())];
  res.json({ categories: metrics, all });
});

// Endpoint: full performance data for a district and year (aggregated across months)
// Example: /performance?district=Siddipet&year=2023-2024
app.get('/performance', async (req, res) => {
  const { district, year } = req.query;
  if (!district || !year) {
    return res.status(400).json({ error: 'district and year are required' });
  }
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
      SUM("SC_persondays") as "SC_persondays",
      SUM("ST_persondays") as "ST_persondays",
      SUM("Women_Persondays") as "Women_Persondays",
      SUM(COALESCE("Total_Individuals_Worked",0)) as "Total_Individuals_Worked",
      AVG("percentage_payments_gererated_within_15_days") as "percentage_payments_gererated_within_15_days"
    FROM state_data
    WHERE "district_name" = $1 AND "fin_year" = $2
  `;
  try {
    const result = await pool.query(sql, [district, year]);
    res.json({ district, year, performance: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: trend over years for a metric in a district
// Example: /trend?district=Siddipet&metric=Total_Exp
app.get('/trend', async (req, res) => {
  const { district, metric } = req.query;
  if (!district || !metric) {
    return res.status(400).json({ error: 'district and metric are required' });
  }
  const avgMetrics = new Set([
    'Average_days_of_employment_provided_per_Household',
    'Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days'
  ]);
  const allowedMetrics = new Set([
    'Total_Exp','Wages','Material_and_skilled_Wages','Approved_Labour_Budget',
    'Average_days_of_employment_provided_per_Household','Average_Wage_rate_per_day_per_person',
    'Number_of_Completed_Works','Number_of_Ongoing_Works','Total_No_of_Works_Takenup',
    'SC_persondays','ST_persondays','Women_Persondays','percentage_payments_gererated_within_15_days',
    'Total_Individuals_Worked'
  ]);
  if (!allowedMetrics.has(metric)) {
    return res.status(400).json({ error: 'Invalid metric' });
  }
  const agg = avgMetrics.has(metric) ? 'AVG' : 'SUM';
  const sql = `
    SELECT "fin_year", ${agg}("${metric}") as value
    FROM state_data
    WHERE "district_name" = $1
    GROUP BY "fin_year"
    ORDER BY "fin_year"
  `;
  try {
    const result = await pool.query(sql, [district]);
    res.json({ district, metric, series: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: state summary leaderboard for a metric (top/bottom districts)
// Example: /state-summary?year=2023-2024&metric=Total_Exp&limit=10
app.get('/state-summary', async (req, res) => {
  const { year, metric = 'Total_Exp', limit = '10', state } = req.query;
  if (!year) return res.status(400).json({ error: 'year is required' });

  const allowedMetrics = new Set([
    'Total_Exp','Wages','Material_and_skilled_Wages','Approved_Labour_Budget',
    'SC_persondays','ST_persondays','Women_Persondays',
    'Number_of_Completed_Works','Number_of_Ongoing_Works','Total_No_of_Works_Takenup',
    'Average_days_of_employment_provided_per_Household','Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days','Total_Individuals_Worked'
  ]);
  if (!allowedMetrics.has(metric)) return res.status(400).json({ error: 'Invalid metric' });

  const avgMetrics = new Set([
    'Average_days_of_employment_provided_per_Household','Average_Wage_rate_per_day_per_person','percentage_payments_gererated_within_15_days'
  ]);
  const agg = avgMetrics.has(metric) ? 'AVG' : 'SUM';
  const lim = Math.min(parseInt(limit, 10) || 10, 100);

  const params = [year];
  let where = 'WHERE "fin_year" = $1';
  if (state) {
    params.push(state);
    where += ` AND "state_name" = $${params.length}`;
  }

  const sql = `
    WITH scores AS (
      SELECT "district_name", ${agg}("${metric}") as value
      FROM state_data
      ${where}
      GROUP BY "district_name"
    )
    SELECT
      (SELECT json_agg(s ORDER BY s.value DESC LIMIT ${lim}) FROM scores s) AS top,
      (SELECT json_agg(s ORDER BY s.value ASC  LIMIT ${lim}) FROM scores s) AS bottom
  `;
  try {
    const result = await pool.query(sql, params);
    const row = result.rows[0] || {};
    res.json({ year, metric, state: state || 'all', top: row.top || [], bottom: row.bottom || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: derived insights for a district/year
// Example: /insights?district=Siddipet&year=2023-2024
app.get('/insights', async (req, res) => {
  const { district, year } = req.query;
  if (!district || !year) return res.status(400).json({ error: 'district and year are required' });

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
  try {
    const { rows } = await pool.query(sql, [district, year]);
    const d = rows[0] || {};
    const toNumber = v => (v === null || v === undefined ? 0 : Number(v));
    const approved = toNumber(d.Approved_Labour_Budget);
    const exp = toNumber(d.Total_Exp);
    const worksTaken = toNumber(d.Total_No_of_Works_Takenup);
    const worksCompleted = toNumber(d.Number_of_Completed_Works);
    const sc = toNumber(d.SC_persondays);
    const st = toNumber(d.ST_persondays);
    const women = toNumber(d.Women_Persondays);
    const totalIndividuals = toNumber(d.Total_Individuals_Worked);
    const payment15 = toNumber(d.percentage_payments_gererated_within_15_days);

    const pct = (num, den) => (den > 0 ? (num / den) * 100 : 0);

    const insights = {
      budget_utilization_pct: pct(exp, approved),
      work_completion_pct: pct(worksCompleted, worksTaken),
      inclusivity_index_pct: pct(sc + st + women, totalIndividuals),
      payment_timeliness_pct: payment15
    };
    res.json({ district, year, insights, inputs: d });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- START THE SERVER ---
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});