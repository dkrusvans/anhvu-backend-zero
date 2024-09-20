const connection = require('../config/database');
const { getAllLnx }=require('../services/CRUDService')


const getHomepage = async (req, res) => {
    let results = await getAllLnx();

    return res.render('homePage.ejs',{listLnx: results})
}
const getCreateLnx = (req, res) => {
    return res.render('createLnx.ejs')
}

const postCreateLnx = async (req,res) => {
    let { khachhang, loainhapxuat, thoigiannhanhang, tenvattu, quycach, soluong, trongluong, dongia, cbkd, status } = req.body;
    let [results,fields]= await connection.query(
        `INSERT INTO Lenhnhapxuat(khachhang, loainhapxuat, thoigiannhanhang, tenvattu, quycach, soluong, trongluong, dongia, cbkd, status)
        VALUE(?,?,?,?,?,?,?,?,?,?)`,
        [khachhang, loainhapxuat, thoigiannhanhang, tenvattu, quycach, soluong, trongluong, dongia, cbkd, status]
        
    );
    return res.render('homePage.ejs')
}

module.exports = {
    getHomepage,postCreateLnx,getCreateLnx
}