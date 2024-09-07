//nếu dùng cú pháp process.env phải có dòng lệnh dưới
require('dotenv').config()
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
  
module.exports = connection;