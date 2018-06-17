const express = require('express');
const router = express.Router();
const Ride = require("../models/Ride");


/* GET home page. */

router.post('/', function(req, res, next) {
    /*const v = new Ride;

    v.rideTitle = 'Title';
    v.startMarkerCoordinateX=1;
    v.startMarkerCoordinateY=1;
    v.description='desc';
    v.markers.addToSet({id: 2,
        markerCoordinateX: 2,
        markerCoordinateY: 2});
    v.markers.addToSet({id: 3,
        markerCoordinateX: 3,
        markerCoordinateY: 3});
    v.markers.addToSet({id: 4,
        markerCoordinateX: 4,
        markerCoordinateY: 4});
    console.log(`variable: ${v}`);*/
    res.json(req.body);
});


module.exports = router;
