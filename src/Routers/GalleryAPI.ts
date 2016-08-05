import * as controllers from './../controller/index';
import * as  express from 'express';
import * as passport from 'passport';
import * as multer from 'multer';
var upload = multer({ dest: 'uploads/' });


export namespace GalleryAPI {
    export var galleryRouter = express.Router();
    galleryRouter
        .get('/', passport.authenticate('jwt'), controllers.PhotoController.getGalleryList)
        .post('/', upload.array('file'), controllers.PhotoController.uploadPhoto);

}
