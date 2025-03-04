// get the client
const mysql = require('mysql2/promise');
require("dotenv").config()
// create the connection to database
 const pool = mysql.createPool({
  // port: '3306',
  // host: 'sql103.infinityfree.com',
  // user: 'if0_37668637_db_huynguyen',
  // password: 'AEJxbjqvAlXqE',
  // database: 'if0_37668637_db_huynguyen'
  port: process.env.PORT_DB,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

pool.getConnection()
.then(() => console.log('Connected to the MySQL database.'))
.catch((err) => console.error('MySQL connection error: ', err))
.finally(()=>{
  console.log(process.env.PORT_DB)  
  console.log(process.env.HOST)
  console.log(process.env.USER)
  console.log(process.env.PASSWORD)
  console.log(process.env.DATABASE) 
})

module.exports = pool