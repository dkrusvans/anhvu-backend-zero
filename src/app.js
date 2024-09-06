require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config temple engine
configViewEngine(app);

//create route
app.use('/', webRoutes);




app.listen(port,hostname)