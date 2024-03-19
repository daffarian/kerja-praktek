const postgres = require('postgres');

const sql = postgres({
  /* options */
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
}); // will use psql environment variables

export default sql;
