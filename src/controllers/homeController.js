const connection = require('../config/database');
const { getAllLnx,getEditLnx }=require('../services/CRUDService')


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
    return res.redirect('/');
}
const getUpdateLnx = async (req, res) => {
    const lnxid = req.params.id;
    let [results, fields] = await connection.query('select * from Lenhnhapxuat where id = ?', [lnxid]);
    let lnx = results && results.length > 0 ? results[0] : {};

    
    return res.render('edit.ejs', {  lnxEdit: lnx });
    // { listLnx: results2 }
}

const postUpdateLnx = async (req,res) => {
    let { khachhang, loainhapxuat, thoigiannhanhang, tenvattu, quycach, soluong, trongluong, dongia, cbkd, status, lnxid } = req.body;
    let [results, fields] = await connection.query(
        `UPDATE Lenhnhapxuat
        SET khachhang = ?,
        loainhapxuat=?,
        thoigiannhanhang=?,
        tenvattu=?,
        quycach=?,
        soluong=?,
        trongluong=?,
        dongia=?,
        cbkd=?,
        status=?
        WHERE id=?`,
        [khachhang, loainhapxuat, thoigiannhanhang, tenvattu, quycach, soluong, trongluong, dongia, cbkd, status, lnxid]
        
    );
    return res.send("Update success")
}
const postDeleteLnx = async (req, res) => {
    const lnxid = req.params.id;
    let [results, fields] = await connection.query('select * from Lenhnhapxuat where id = ?', [lnxid]);
    let lnx = results && results.length > 0 ? results[0] : {};

    res.render('delete.ejs',{lnxEdit: lnx})
}
const postHandleRemoveLnx = async (req, res) => {
    const id = req.body.lnxid;
    let [results, fields] = await connection.query(
        `DELETE FROM Lenhnhapxuat WHERE id = ?`, [id]
    );
    res.redirect('/')
}

module.exports = {
    getHomepage, postCreateLnx, getCreateLnx, getUpdateLnx, postUpdateLnx,
    postDeleteLnx,postHandleRemoveLnx
}