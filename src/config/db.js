// ✅ Loads environment variables safely
import { config as loadEnv } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';

// ✅ Ensure .env is loaded correctly even if CWD differs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadEnv({ path: path.resolve(__dirname, '../../.env') });
if (!process.env.DATABASE_URL) loadEnv();

// ✅ Validate DATABASE_URL presence
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set. Please define it in your .env file');
  throw new Error('DATABASE_URL missing');
}

// ✅ Create pooled connection (optimized for Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 10, // ✅ only 10 concurrent clients to reduce Neon connection overhead
  idleTimeoutMillis: 30000, // ✅ close idle clients after 30s
  connectionTimeoutMillis: 5000, // ✅ timeout if DB doesn’t respond
});

// ✅ Simple query wrapper (for better logging + debugging)
pool.on('connect', () => console.log('✅ Connected to Neon DB'));
pool.on('error', (err) => console.error('❌ Unexpected DB error:', err));

export default pool;
// Keep the Neon connection warm to avoid cold start delays
setInterval(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('🔥 Keep-alive ping sent to Neon');
  } catch (err) {
    console.error('⚠️ Keep-alive ping failed:', err.message);
  }
}, 2 * 60 * 1000); // every 2 minutes
