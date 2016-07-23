import * as controllers from './../controller/index';
import * as  express from 'express';
import * as passport from 'passport'



export namespace GalleryAPI {
    export var galleryRouter = express.Router();
    galleryRouter.all('/', function (req, res, next) {
        console.log('photos are requested!');
        next();
    }).get('/', passport.authenticate('jwt'), controllers.PhotoController.getGalleryList);

}

