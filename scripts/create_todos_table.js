// Script to automate table creation using SQL file
import fs from 'fs';
import path from 'path';
import pool from '../server/utils/postgres.js';

async function runMigration() {
  const sqlPath = path.resolve('postgres-init', 'create_todos_table.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');
  try {
    await pool.query(sql);
    console.log('Todos table created or already exists.');
  } catch (err) {
    console.error('Error running migration:', err);
  } finally {
    await pool.end();
  }
}

runMigration();
