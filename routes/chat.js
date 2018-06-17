const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const chatMessage = require("../models/ChatMessages");

router.post('/addmessage', function(req, res){
    const message = new chatMessage();
    message.email = req.body.email;
    message.rideId = req.body.rideId;
    message.message = req.body.message;
    message.save(function(err, message) {
        if (err) {
            return res.json(err);
        }
        res.json(message);
    });
});

router.post('/getmessages', function(req, res){
    chatMessage.find({rideId: req.body.rideId},
        function(err, messages) {
            if (err) {
                return res.status(400).json({
                    message: 'Something is not right',
                    err: err
                });
            }

            if(messages) {
                res.json(messages);
            }
        }
    );

});
module.exports = router;

