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
const pool = new Pool({
    // The connection string is ONLY the URL
    connectionString: "postgresql://neondb_owner:npg_DSx4u3KawHzV@ep-floral-cake-a4ywochh-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
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

// Endpoint to compare two districts
app.get('/compare', async (req, res) => {
  // e.g., /compare?district1=Siddipet&district2=Adilabad
  const { district1, district2 } = req.query; 

  if (!district1 || !district2) {
    return res.status(400).json({ error: "Please provide two districts to compare" });
  }

  try {
    const query = `
      SELECT "district_name", 
             AVG("Total_Exp") as "avg_exp", 
             SUM("Women_Persondays") as "total_women_days"
      FROM state_data
      WHERE "district_name" IN ($1, $2)
      GROUP BY "district_name"
    `;
    const result = await pool.query(query, [district1, district2]);
    res.json({ comparison_data: result.rows });
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


// --- START THE SERVER ---
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});