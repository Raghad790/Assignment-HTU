//to connect to the database 
//connection with postgres

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const {Pool}  =pg;//pool constructer in the db
//connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

});
export default pool;