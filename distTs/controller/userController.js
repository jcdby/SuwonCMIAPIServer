"use strict";
var UserModel_1 = require('./../Models/UserModel');
var Crypto_1 = require('./../Securiry/Crypto');
var jwt = require('jsonwebtoken');
var UserController;
(function (UserController) {
    function signup(req, res) {
        UserModel_1.User.findOne({ username: req.body.username }, function (err, item) {
            if (err)
                throw err;
            if (item) {
                res.send(item.username + ' is existed');
            }
            else {
                var password = Crypto_1.Crypto.bcryptHash(req.body.password);
                var user = new UserModel_1.User(req.body);
                user.password = password;
                user.save(function (err, item) {
                    if (err)
                        throw err;
                    res.send(item + ' is created!');
                });
            }
        });
    }
    UserController.signup = signup;
    function signin(req, res) {
        UserModel_1.User.findOne({ username: req.body.username }, function (err, item) {
            if (err)
                throw err;
            if (!item) {
                res.send('user is not existed! please Sign up!');
            }
            else {
                if (!Crypto_1.Crypto.bcryptCompare(req.body.password, item.password)) {
                    res.send('password is wrong');
                }
                else {
                    var token = jwt.sign(req.body, 'swcmi', {});
                    res.send({
                        token: token,
                        isSuccess: true
                    });
                }
            }
        });
    }
    UserController.signin = signin;
})(UserController = exports.UserController || (exports.UserController = {}));
