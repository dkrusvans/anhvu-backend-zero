const mongoose = require('mongoose');


// Định dạng database kiểu dữ liệu
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

//chỉnh sửa table
const User = mongoose.model('user', userSchema);

module.exports = User;
