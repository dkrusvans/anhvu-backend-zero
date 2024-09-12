const mongoose = require('mongoose');


// Định dạng database kiểu dữ liệu
const lnxSchema = new mongoose.Schema({
    khachhang: String,
    loainhapxuat: String,
    thoigiannhanhang: String,
    tenvattu: String,
    quycach: String,
    soluong: String,
    trongluong: String,
    dongia: String,
    cbkd: String
});

//chỉnh sửa table
const Lnx = mongoose.model('lenhnhapxuat', lnxSchema);

module.exports = Lnx;
