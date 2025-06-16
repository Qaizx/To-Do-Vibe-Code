// PostgreSQL connection utility for Node.js (Nuxt 3)
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'mydb',
  password: process.env.PGPASSWORD || 'password',
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
});

export default pool;
