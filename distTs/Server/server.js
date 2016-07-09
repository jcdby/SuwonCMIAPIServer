"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var APIs_1 = require('../Routers/APIs');
var CORSmiddleware_1 = require('../Middlewares/CORSmiddleware');
var Server = (function () {
    function Server(options) {
        this.options = options || {};
        this.apiRouter = new APIs_1.APIRouter();
    }
    Server.prototype.start = function () {
        var app = express();
        var upload = multer();
        app.use(CORSmiddleware_1.allowCrossDomain);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        this.apiRouter.init(app);
        app.listen(10000, function () {
            console.log('SuWon church API Server listening on port 10000!');
        });
    };
    return Server;
}());
exports.Server = Server;
