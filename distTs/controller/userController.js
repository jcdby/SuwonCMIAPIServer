"use strict";
var UserModel_1 = require('./../Models/UserModel');
var UserController;
(function (UserController) {
    function signup(req, res) {
        UserModel_1.User.find({ username: req.body.username });
        var user = new UserModel_1.User(req.body);
        user.save(function (err, item) {
            if (err)
                throw err;
            res.send(item.username + ' is created!');
        });
    }
    UserController.signup = signup;
})(UserController = exports.UserController || (exports.UserController = {}));
