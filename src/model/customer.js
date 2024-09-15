const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

// Định dạng database kiểu dữ liệu
const customerSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    
},
    {
        timestamps: true, //createAt updateAt
        
        // statics: {
        //     deleteById(name) {
        //       return this.find({ name: new RegExp(name, 'i') });
        //     }
        //   }
    } 
);

//soft delete
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
//chỉnh sửa table
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
