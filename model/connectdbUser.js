const mysql = require("mysql2/promise")


const poolUser = mysql.createPool({
  port : '3307',
  host: '14.225.218.25',
  user: 'huynguyen1',
  password : "123",
  database: 'nodejsbasic'
  });
  

module.exports = poolUser

