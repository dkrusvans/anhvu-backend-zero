const User = require("../model/user");
const Lnx = require("../model/createlnxmodel");
const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const getLenhnhapxuatsAPI = async (req, res) => {
    let results = await Lnx.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    
    let { username, email, password } = req.body;
    let user = await User.create({
        username, email, password
    })
    
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const postCreateLnxAPI = async (req, res) => {
    
    let { khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd } = req.body;
    let lnx = await Lnx.create({
        khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd
    })
    
    return res.status(200).json({
        errorCode: 0,
        data: lnx
    })
}
const putUpdateUserAPI = async (req, res) => {
    
    let { userId, username, email, password } = req.body;
    let user = await User.updateOne(
        { _id: userId },
        { username: username },
        { email: email},
        { password: password}
    );
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const putUpdateLnxAPI = async (req, res) => {
    
    let { lnxId, khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd } = req.body;
    let lnx = await Lnx.updateOne(
        { _id: lnxId },
        { khachhang: khachhang },
        { loainhapxuat: loainhapxuat },
        { thoigiannhanhang: thoigiannhanhang },
        { tenvattu: tenvattu },
        { quycach: quycach },
        { soluong: soluong },
        { trongluong: trongluong },
        { dongia: dongia },
        { cbkd: cbkd }
    );
    
    return res.status(200).json({
        errorCode: 0,
        data: lnx
    })
}
const deleteUserAPI = async (req,res) => {
    const id = req.body.userId;
    let result = await User.deleteOne({ _id:id })
    
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const deleteLnxAPI = async (req,res) => {
    const id = req.body.lnxId;
    let result = await Lnx.deleteOne({ _id:id })
    
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI, putUpdateUserAPI, putUpdateLnxAPI,
    deleteUserAPI, deleteLnxAPI
}
