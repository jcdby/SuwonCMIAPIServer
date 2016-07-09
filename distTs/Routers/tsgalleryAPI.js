"use strict";
var photoController = require('./../controller/photoController');
var express = require('express');
exports.galleryRouter = express.Router();
exports.galleryRouter.all('/', function (req, res, next) {
    console.log('photos are requested!');
    next();
}).get('/', photoController.getGalleryList);
