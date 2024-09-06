require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
// Get the client
const mysql = require('mysql2');


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config temple engine
configViewEngine(app);

//create route
app.use('/', webRoutes);

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port:'3307',
  user: 'root',
  password:'123456',
  database: 'dohoanganhvu',
});

// A simple SELECT query

connection.query(
    'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log("check results ",results); // results contains rows returned by server
    // console.log("check field ",fields); // fields contains extra meta data about results, if available

  }
);

  


app.listen(port,hostname)