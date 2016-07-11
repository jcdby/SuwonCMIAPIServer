import * as controllers from './../controller/index';
import * as  express from 'express';



export namespace GalleryAPI {
    export var galleryRouter = express.Router();
    galleryRouter.all('/', function (req, res, next) {
        console.log('photos are requested!');
        next();
    }).get('/', controllers.PhotoController.getGalleryList);

}

