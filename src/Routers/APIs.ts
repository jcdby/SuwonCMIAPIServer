import * as express from 'express';
import {articleRouter} from './tsarticleAPI';
import {galleryRouter} from './tsgalleryAPI';
import * as user_contro from './../controller/userController'

export class APIRouter {


  constructor() {
   
  }

  init(app: express.Express){

    app.use(express.static('./src/public'));
    app.use('/articles', articleRouter);
    app.use('/photos', galleryRouter);

    app.route('/signup')
        .post(user_contro.signup);

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!changing');
    });
  }
  
}