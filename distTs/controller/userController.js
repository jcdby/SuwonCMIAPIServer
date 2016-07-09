"use strict";
var tsuser_1 = require('./../models/tsuser');
function signup(req, res) {
    tsuser_1.User.find({ username: req.body.username });
    var user = new tsuser_1.User(req.body);
    user.save(function (err, item) {
        if (err)
            throw err;
        res.send(item.username + ' is created!');
    });
}
exports.signup = signup;
