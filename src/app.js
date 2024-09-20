require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for form data

//config temple engine
configViewEngine(app);

//create route
app.use('/', webRoutes);



// connection.query(
//     'SELECT * FROM Lenhnhapxuat u',
//     function (err, results,fields) {
//         console.log("check results= ", results);
//     }
// )

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})