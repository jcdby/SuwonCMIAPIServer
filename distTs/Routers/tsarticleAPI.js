"use strict";
var express = require('express');
exports.articleRouter = express.Router();
exports.articleRouter.all('/', function (req, res, next) {
    console.log('article request is getted!');
    next();
}).get('/', function (req, res) {
    res.send('getting articles');
});
