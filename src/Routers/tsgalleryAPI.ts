/// <reference path="../../typings/index.d.ts" />


import * as photoController from './../controller/photoController';
import * as  express from 'express';
export var galleryRouter = express.Router();

galleryRouter.all('/', function (req, res, next) {
    console.log('photos are requested!');
    next();
}).get('/', photoController.getGalleryList);

