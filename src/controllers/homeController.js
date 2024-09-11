const connection = require('../config/database');


const { getAllUsers, getAllLnxs, getUsersById, getLnxById,
    updateUsersById, updateLnxById, deleteUserById
 } = require('../services/CRUDService');


const postCreateUser = async (req, res) => {
    
    let { username, email, password } = req.body;
    
    let [results, fields] = await connection.query(
        `INSERT INTO Users (username,email,password)VALUES (?,?,?)`, [username, email, password]);
            // console.log('check results: ', results);
            res.send('Create user succeed !')
}

const postCreateLnx = async (req, res) => {
    
    let { khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd } = req.body;
    
    let [results, fields] = await connection.query(
        `INSERT INTO Lenhnhapxuat (khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd)VALUES (?,?,?,?,?,?,?,?,?)`,
        [khachhang, loainhapxuat, thoigiannhanhang,
            tenvattu, quycach, soluong, trongluong, dongia, cbkd]);
            // console.log('check results: ', results);
            res.send('Thêm mới Lệnh nhạp xuất succeed !')
}

const getCreatePage = (req,res) => {
    res.render('create.ejs')
}

const getLnxPage = (req,res) => {
    res.render('createlnx.ejs')
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

const getLenhnhapxuatPage = async(req, res) => {
    let results = await getAllLnxs();
    
    return res.render('khsx.ejs', { listLnxs: results })
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUsersById(userId);
    res.render('edit.ejs', { userEdit: user }); // x<-y gan bien
}

const getUpdateLnxPage = async (req, res) => {
    const lnxId = req.params.id;
    let lnx = await getLnxById(lnxId);
    res.render('editlnx.ejs', { lnxEdit: lnx }); // x<-y gan bien
}

const postUpdateUser = async (req, res) => {
    
    let { userId, username, email, password } = req.body;
    await updateUsersById(username, email, password, userId);
    res.redirect('/');
}
const postDeleteUser = async (req,res) => {
    const userId = req.params.id;
    let user = await getUsersById(userId);
    res.render('delete.ejs',{userEdit: user})
}
const postHandleRemoveUser = async (req,res) => {
    const id = req.body.userId;
    await deleteUserById(id);
        res.redirect('/');
}

const postUpdateLnx = async (req, res) => {
    
    let { lnxId, khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd } = req.body;
    await updateLnxById(khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd, lnxId);
    res.redirect('/khsx');
}

module.exports = {
    getHomepage, postCreateUser,
    getCreatePage, getKhsxPage, getLnxPage, postCreateLnx,
    getUpdatePage, getUpdateLnxPage, getLenhnhapxuatPage,
    postUpdateUser, postUpdateLnx, postDeleteUser, postHandleRemoveUser
}