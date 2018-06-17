const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const User = new mongoose.Schema({
    email: String,
    firstName: String,
    secondName: String,
    facebook: String,
    twitter: String,
    telegram: String
});

module.exports = mongoose.model('User', User);