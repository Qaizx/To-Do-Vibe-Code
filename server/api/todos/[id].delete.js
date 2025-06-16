import pool from '../../utils/postgres.js';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
});
