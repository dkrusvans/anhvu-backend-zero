const mongoose = require('mongoose');


// Định dạng database kiểu dữ liệu
const customerSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    
},
    { timestamps: true }
);

//chỉnh sửa table
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
