const mongoose = require('mongoose');

// ***** Build Your Model Schema here *****
const customersSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    address: String,
    city: String,
    phoneNumber: String,
    status: String

})

module.exports = mongoose.model('customers', customersSchema);
