"use strict";
var mongoose = require('mongoose');
var database_1 = require('./../Database/database');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    password: String
});
exports.User = database_1.default.getDB().model('user', UserSchema, 'users');
