const express = require('express');
const passport = require('passport');


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/info', passport.authenticate('jwt'), function(req, res){
  //delete req.user.password;
  //delete req.user._id;
  res.json(req.user)
});

router.post('/setinfo', function(req, res){
    req.user.username = req.body.username;
    req.user.password = req.user.generateHash(req.body.password);
    req.user.facebook = req.body.facebook;
    req.user.twitter = req.body.twitter;
    req.user.telegram = req.body.telegram;
    req.user.gender = req.body.gender;
    req.user.age = req.body.age;
    req.user.firstName = req.body.firstName;
    req.user.secondName = req.body.secondName;
    req.user.save(function(err, user) {
            if (err) {
                return res.json(err);
            }
            res.json(user);
        });
    res.json(req.user)
});




module.exports = router;
