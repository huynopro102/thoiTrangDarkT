const mysql = require("mysql2/promise")
require("dotenv").config()

const poolUser = mysql.createPool({
  port: process.env.PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
  });
  

module.exports = poolUser