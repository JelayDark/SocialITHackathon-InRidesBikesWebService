const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ChatMessages = new mongoose.Schema({
    messageId: String,
    email: String,
    rideId: String,
    message: String,
    messageDateTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatMessages', ChatMessages);