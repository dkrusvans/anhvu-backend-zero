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

module.exports = {
    getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI
}
