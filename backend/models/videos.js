const mongoose = require('mongoose');

// ***** Build Your Model Schema here *****
const videosSchema = mongoose.Schema({
    title: String,
    rTime:String,
    genre: String,
    ratings: String,
    director: String,
    status: String,
    image: String

})

module.exports = mongoose.model('Videos', videosSchema);
