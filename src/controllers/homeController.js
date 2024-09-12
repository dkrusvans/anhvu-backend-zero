const connection = require('../config/database');


const { getAllUsers, getAllLnxs, getUsersById, getLnxById,
    updateUsersById, updateLnxById, deleteUserById
 } = require('../services/CRUDService');
const User = require("../model/user");
const Lnx = require('../model/createlnxmodel');

const postCreateUser = async (req, res) => {
    
    let { username, email, password } = req.body;
    await User.create({
        username, email, password
    })
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (username,email,password)VALUES (?,?,?)`, [username, email, password]);
    //         // console.log('check results: ', results);
            res.send('Create user succeed !')
}

const postCreateLnx = async (req, res) => {
    
    let { khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd } = req.body;
    await Lnx.create({
        khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd
    })
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
    let results = await User.find({});
    
    return res.render('home.ejs', { listUsers: results })
}

const getLenhnhapxuatPage = async(req, res) => {
    let results = await Lnx.find({});
    
    return res.render('khsx.ejs', { listLnxs: results })
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId);
    res.render('edit.ejs', { userEdit: user }); // x<-y gan bien
}

const getUpdateLnxPage = async (req, res) => {
    const lnxId = req.params.id;
    let lnx = await Lnx.findById(lnxId);
    res.render('editlnx.ejs', { lnxEdit: lnx }); // x<-y gan bien
}

const postUpdateUser = async (req, res) => {
    
    let { userId, username, email, password } = req.body;
    await User.updateOne(
        { _id: userId },
        { username: username },
        { email: email},
        { password: password}
    );
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
    await Lnx.updateOne(
        {_id:lnxId},
        {khachhang:khachhang},
        {loainhapxuat:loainhapxuat},
        {thoigiannhanhang:thoigiannhanhang},
        {tenvattu:tenvattu},
        {quycach:quycach},
        {soluong:soluong},
        {trongluong:trongluong},
        {dongia:dongia},
        {cbkd:cbkd}
        );
    res.redirect('/khsx');
}

module.exports = {
    getHomepage, postCreateUser,
    getCreatePage, getKhsxPage, getLnxPage, postCreateLnx,
    getUpdatePage, getUpdateLnxPage, getLenhnhapxuatPage,
    postUpdateUser, postUpdateLnx, postDeleteUser, postHandleRemoveUser
}