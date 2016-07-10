"use strict";
var controllers = require('./../controller/index');
var express = require('express');
exports.galleryRouter = express.Router();
exports.galleryRouter.all('/', function (req, res, next) {
    console.log('photos are requested!');
    next();
}).get('/', controllers.PhotoController.getGalleryList);
