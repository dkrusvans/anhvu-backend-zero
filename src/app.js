require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileupload = require('express-fileupload');
// const { name } = require('ejs');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config file-upload
app.use(fileupload());

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended:true})) // for form data

//config temple engine
configViewEngine(app);

//create route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


(async() => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`App listening on port ${port}`)
        })
    } catch (error) {
        console.log("Error connect to DB: ",error)
   }
    
})()

