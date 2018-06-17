const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BicycleRental = new mongoose.Schema({
    bicycleRentalId: String,
    bicycleRentalName: String,
    coordinateX: String,
    coordinateY: String,
    workFrom: Date,
    workTo: Date,
    rentCostPerHour: Number
});

module.exports = mongoose.model('BicycleRental', BicycleRental);