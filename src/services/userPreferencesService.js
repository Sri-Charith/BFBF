import pool from '../config/db.js';
import { ALLOWED_METRICS } from '../utils/constants.js';

const ensureTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS user_preferences (
      user_id TEXT PRIMARY KEY,
      metrics TEXT[] NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT now()
    )
  `;
  await pool.query(sql);
};

export const savePreferences = async (userId, metrics) => {
  if (!Array.isArray(metrics) || metrics.length !== 5) {
    throw new Error('Exactly 5 metrics are required');
  }
  for (const m of metrics) {
    if (!ALLOWED_METRICS.has(m)) {
      throw new Error(`Invalid metric: ${m}`);
    }
  }
  await ensureTable();
  const upsert = `
    INSERT INTO user_preferences (user_id, metrics, updated_at)
    VALUES ($1, $2, now())
    ON CONFLICT (user_id) DO UPDATE SET metrics = EXCLUDED.metrics, updated_at = now()
    RETURNING user_id, metrics, updated_at
  `;
  const { rows } = await pool.query(upsert, [userId, metrics]);
  return rows[0];
};

export const getPreferences = async (userId) => {
  await ensureTable();
  const { rows } = await pool.query('SELECT user_id, metrics FROM user_preferences WHERE user_id = $1', [userId]);
  return rows[0]?.metrics || null;
};


