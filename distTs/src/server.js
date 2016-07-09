"use strict";
var express = require('express');
var APIs_1 = require('./src/Routers/APIs');
var CORSmiddleware_1 = require('./src/Middlewares/CORSmiddleware');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var upload = multer();
app.use(CORSmiddleware_1.allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
APIs_1.default(app);
app.listen(10000, function () {
    console.log('SuWon church API Server listening on port 10000!');
});
