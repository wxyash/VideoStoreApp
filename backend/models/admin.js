const mongoose = require('mongoose');

// ***** Build Your Model Schema here *****
const adminSchema = mongoose.Schema({
    email  : String,
    password: String
})

module.exports = mongoose.model('admin', adminSchema);
