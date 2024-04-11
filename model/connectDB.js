// get the client
const mysql = require('mysql2/promise');

// create the connection to database
 const pool = mysql.createPool({
  port : '3307',
  host: '14.225.218.25',
  user: 'huynguyen1',
  password : "123",
  database: 'nodejsbasic'
});


module.exports = pool