require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const Kitten = require('./model/Kitten');
const { name } = require('ejs');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended:true})) // for form data

//config temple engine
configViewEngine(app);

//create route
app.use('/', webRoutes);

const cat = new Kitten({ name: 'Lenhnhapxuat' });
cat.save();

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

