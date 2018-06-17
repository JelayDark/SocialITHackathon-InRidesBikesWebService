const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    username: String,  // email, cos passport
    firstName: String,
    secondName: String,
    facebook: String,
    twitter: String,
    telegram: String,
    gender: String,
    age: { type: Number, min: 10, max: 100 },
    password: String
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.plugin(passportLocalMongoose);

User.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

User.methods.getUserInfo = function () {
    const user = this;
    delete user._id;
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', User);