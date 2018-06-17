const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Ride = new mongoose.Schema({
    rideId: String,
    rideTitle: String,
    coordinateX: String,
    coordinateY: String,
    rideDateTime: { type: Date, default: Date.now },
    description: String
});

module.exports = mongoose.model('Ride', Ride);