"use strict";
var express = require('express');
var tsarticleAPI_1 = require('./tsarticleAPI');
var tsgalleryAPI_1 = require('./tsgalleryAPI');
var user_contro = require('./../controller/userController');
var APIRouter = (function () {
    function APIRouter() {
    }
    APIRouter.prototype.init = function (app) {
        app.use(express.static('./src/public'));
        app.use('/articles', tsarticleAPI_1.articleRouter);
        app.use('/photos', tsgalleryAPI_1.galleryRouter);
        app.route('/signup')
            .post(user_contro.signup);
        app.get('/', function (req, res) {
            res.send('Welcome to Suwon CMI church!changing');
        });
    };
    return APIRouter;
}());
exports.APIRouter = APIRouter;
