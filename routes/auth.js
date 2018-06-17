const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');

/* POST login. */
router.post('/login', function(req, res) {
    passport.authenticate('local', {session: false}, (err, user, message) => {
        if (err || !user) {
            return res.status(400).json({
                message: message,
                user: user,
                req: req.body,
                err: err
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user.toJSON(), 'my_secret', {
                expiresIn: 604800 // 1 week
            });
            return res.json({user, token});
        });
    })(req, res);
});

router.post('/register', function(req, res) {
    User.findOne({ username: req.body.username }, function(err, account) {
        if (err) {
            return res.status(400).json({
                message: 'Something is not right',
                err: err
            });
        }

        if(account) {
            res.json({ message: 'account with this mail is already have'});
            // return;
        } else {
            const newUser = new User();
            newUser.username = req.body.username;
            newUser.password = newUser.generateHash(req.body.password);
            newUser.facebook = req.body.facebook;
            newUser.twitter = req.body.twitter;
            newUser.telegram = req.body.telegram;
            newUser.gender = req.body.gender;
            newUser.age = req.body.age;
            newUser.firstName = req.body.firstName;
            newUser.secondName = req.body.secondName;

            newUser.save(function(err, user) {
                req.login(user, function(err) {
                    if (err) {
                        return res.json(err);
                    }
                    res.json(user);
                });
            });
        }
    });
});

router.post('/jwt', function(req, res) {
        passport.authenticate('jwt', (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    user: user,
                    err: err
                });
            }

            res.json({success: 'You are authenticated with JWT!', user: user})
        })(req, res);
});


module.exports = router;