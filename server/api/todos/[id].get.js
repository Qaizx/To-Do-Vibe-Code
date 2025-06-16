import pool from '../../utils/postgres.js';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  return result.rows[0];
});
