const connection = require('../config/database');

const getHomepage = (req, res) => {
    // let users = [];
    // connection.query(
    //     'SELECT * FROM Lenhnhapxuat u',
    //     function (err, results, fields) {
    //         users = results
    //         // console.log("check results= ", users);
    //         res.send(JSON.stringify(users))
    //     }
    // );
    return res.render('home.ejs')
}

const postCreateLnx = (req,res) => {
    res.send('Create new Lnx')
}

module.exports = {
    getHomepage,postCreateLnx
}