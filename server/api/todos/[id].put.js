import pool from '../../utils/postgres.js';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  const { title, description, completed } = body;
  if (title === undefined && description === undefined && completed === undefined) {
    return { error: 'Nothing to update' };
  }
  const fields = [];
  const values = [];
  let idx = 1;
  if (title !== undefined) {
    fields.push(`title = $${idx++}`);
    values.push(title);
  }
  if (description !== undefined) {
    fields.push(`description = $${idx++}`);
    values.push(description);
  }
  if (completed !== undefined) {
    fields.push(`completed = $${idx++}`);
    values.push(completed);
  }
  fields.push(`updated_at = CURRENT_TIMESTAMP`);
  values.push(id);
  const result = await pool.query(
    `UPDATE todos SET ${fields.join(', ')} WHERE id = $${idx} RETURNING *`,
    values
  );
  return result.rows[0];
});
