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

// Don't use raw pg Pool if using Accelerate - use Prisma instead
const useAccelerate = process.env.PRISMA_ACCELERATE_URL || 
  (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('prisma://'));

// ✅ Create pooled connection (optimized for Neon)
// Note: If using Prisma Accelerate, prefer Prisma client over raw pg Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 10, // ✅ only 10 concurrent clients to reduce Neon connection overhead
  idleTimeoutMillis: 30000, // ✅ close idle clients after 30s
  connectionTimeoutMillis: 5000, // ✅ timeout if DB doesn't respond
});

// ✅ Simple query wrapper (for better logging + debugging)
pool.on('connect', () => {
  if (!useAccelerate) {
    console.log('✅ Connected to Neon DB (direct connection)');
  }
});
pool.on('error', (err) => console.error('❌ Unexpected DB error:', err));

// Keep-alive function (only start if not using Accelerate)
let keepAliveInterval = null;

if (!useAccelerate) {
  // Start keep-alive only after module is fully loaded
  if (typeof setImmediate !== 'undefined') {
    setImmediate(() => {
      keepAliveInterval = setInterval(async () => {
        try {
          await pool.query('SELECT 1');
          if (process.env.NODE_ENV === 'development') {
            console.log('🔥 Keep-alive ping sent to Neon');
          }
        } catch (err) {
          console.error('⚠️ Keep-alive ping failed:', err.message);
        }
      }, 2 * 60 * 1000); // every 2 minutes
    });
  }
}

// Graceful shutdown
if (typeof process !== 'undefined') {
  const cleanup = async () => {
    if (keepAliveInterval) {
      clearInterval(keepAliveInterval);
    }
    await pool.end();
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('beforeExit', cleanup);
}

export default pool;
