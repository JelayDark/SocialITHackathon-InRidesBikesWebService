const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Ride = require("../models/Ride");

router.post('/addride', function(req, res){
    const ride = new Ride();
    ride.rideTitle = req.body.rideTitle;
    ride.startMarkerCoordinateX = req.body.startMarkerCoordinateX;
    console.log(req.body);
    ride.startMarkerCoordinateY = req.body.startMarkerCoordinateY;
    ride.rideDateTime = req.body.rideDateTime;
    ride.description = req.body.description;
    ride.markers = JSON.parse(req.body.markers); // Пример: [{ "id": 1, "markerCoordinateX": 110, "markerCoordinateY": 110}, {"id": 2, "markerCoordinateX": 100, "markerCoordinateY": 100}]

    ride.save(function(err, ride) {
        if (err) {
            return res.json(err);
        }
        res.json(ride);
    });
});

module.exports = router;

