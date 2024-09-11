const mongoose = require('mongoose');


// Định dạng database kiểu dữ liệu
const kittySchema = new mongoose.Schema({
    name: String
});

//chỉnh sửa table
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
