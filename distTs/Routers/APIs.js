"use strict";
var express = require('express');
var routers = require('./APIRouterIndex');
var APIRouter = (function () {
    function APIRouter() {
    }
    APIRouter.prototype.init = function (app) {
        app.use(express.static('./src/public'));
        app.use('/articles', routers.ArticleRouter.articleRouter);
        app.use('/photos', routers.GalleryAPI.galleryRouter);
        app.use('/signup', routers.UserAPI.signupRouter);
        app.use('/signin', routers.UserAPI.signinRouter);
        app.get('/', function (req, res) {
            res.send('Welcome to Suwon CMI church!changing');
        });
    };
    return APIRouter;
}());
exports.APIRouter = APIRouter;
