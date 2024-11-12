const mysql = require("mysql2/promise")


const poolUser = mysql.createPool({
  port: '3306',
  host: '13.215.153.56',
  user: 'root',
  password: 'root',
  database: 'nodejsbasic'
  });
  

module.exports = poolUser