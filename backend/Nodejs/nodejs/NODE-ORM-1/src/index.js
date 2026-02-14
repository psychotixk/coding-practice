const dotenv = require('dotenv/config');

// import { drizzle } from 'drizzle-orm/node-postgres';

const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require("pg");


//* postgres://<username>:<password>@host:<port>/<db_name>
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });


module.exports = db;
