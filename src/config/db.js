// At the very top, this loads your .env file
// dotenv is already loaded in src/server.js via `import 'dotenv/config'`
// Keep this file as ES Module to match package.json "type": "module"
import { config as loadEnv } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';

// Ensure .env at backend/.env is loaded even if CWD differs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
loadEnv({ path: path.resolve(__dirname, '../../.env') });

// Check if the DATABASE_URL is in the .env file
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Please define it in your .env file');
}

// Create the connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { 
    rejectUnauthorized: false 
  }
});

// Export the pool so your controllers can use it
export default pool;

