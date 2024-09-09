const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');
const postCreateUser = async (req, res) => {
    
    let { username, email, password } = req.body;
    
    let [results, fields] = await connection.query(
        `INSERT INTO Users (username,email,password)VALUES (?,?,?)`, [username, email, password]);
            // console.log('check results: ', results);
            res.send('Create user succeed !')
}

const getCreatePage = (req,res) => {
    res.render('create.ejs')
}

const getKhsxPage = (req,res) => {
    res.render('khsx.ejs')
}
//proccess data
//call model
const getHomepage = async(req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getA = (req,res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,getA,postCreateUser,getCreatePage,getKhsxPage
}