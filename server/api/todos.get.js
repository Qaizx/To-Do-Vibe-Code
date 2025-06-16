// Example server API route using PostgreSQL directly
import pool from '../utils/postgres.js';

export default defineEventHandler(async (event) => {
  // Example: fetch all todos
  const { rows } = await pool.query('SELECT * FROM todos ORDER BY id DESC');
  return rows;
});
