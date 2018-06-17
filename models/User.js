const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const User = new mongoose.Schema({
    email: String,
    firstName: String,
    secondName: String,
    facebook: String,
    twitter: String,
    telegram: String,
    gender: String,
    age: { type: Number, min: 10, max: 100 },
    password: String
});

module.exports = mongoose.model('User', User);