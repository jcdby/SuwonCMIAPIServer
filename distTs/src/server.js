"use strict";
var express = require('express');
var APIs_1 = require('./src/Routers/APIs');
var CORSmiddleware_1 = require('./src/Middlewares/CORSmiddleware');
var body_parser_1 = require('body-parser');
var multer = require('multer');
var app = express();
var upload = multer();
app.use(CORSmiddleware_1.allowCrossDomain);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
APIs_1.default(app);
app.listen(10000, function () {
    console.log('SuWon church API Server listening on port 10000!');
});
