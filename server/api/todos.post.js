import pool from '../utils/postgres.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  
  const title = body.title;
  if (!title) {
    return { error: body.title };
  }
  const result = await pool.query(
    'INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *',
    [title, '', false]
  );
  return result.rows[0];
});
