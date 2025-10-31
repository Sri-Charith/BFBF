import pool from '../config/db.js';

let cachedColumns = null;

export const getStateDataColumns = async () => {
  if (cachedColumns) return cachedColumns;
  const q = `
    SELECT column_name
    FROM information_schema.columns
    WHERE table_name = 'state_data'
  `;
  const { rows } = await pool.query(q);
  cachedColumns = new Set(rows.map(r => r.column_name));
  return cachedColumns;
};

export const columnExists = async (name) => {
  const cols = await getStateDataColumns();
  return cols.has(name);
};


