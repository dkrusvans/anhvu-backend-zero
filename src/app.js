require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const connection = require('./config/database');
const { MongoClient } = require('mongodb');

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
        // Connection URL using mongedb driver
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');
        
        collection.insertOne({"name":"customers"})
        // using mongoose
        // await connection();
        app.listen(port, hostname, () => {
            console.log(`App listening on port ${port}`)
        })
    } catch (error) {
        console.log("Error connect to DB: ",error)
   }
    
})()

