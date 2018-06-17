const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ChatMessages = new mongoose.Schema({
    email: String,
    rideId: String,
    message: String,
    messageDateTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatMessages', ChatMessages);