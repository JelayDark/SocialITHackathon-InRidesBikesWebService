const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Ride = new mongoose.Schema({
    rideTitle: String,
    startMarkerCoordinateX: Number,
    startMarkerCoordinateY: Number,
    rideDateTime: { type: Date, default: Date.now },
    description: String,
    markers:[
        {
        id: Number,
        markerCoordinateX: Number,
        markerCoordinateY: Number
        }
    ]
});

module.exports = mongoose.model('Ride', Ride);