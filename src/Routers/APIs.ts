import * as express from 'express';
import * as routers from './APIRouterIndex'

export class APIRouter {


  constructor() {
   
  }

  init(app: express.Express){

    app.use(express.static('./src/public'));
    app.use('/articles', routers.ArticleRouter.articleRouter);
    app.use('/photos', routers.GalleryAPI.galleryRouter);
    app.use('/signup', routers.UserAPI.signupRouter);
    app.use('/signin', routers.UserAPI.signinRouter);

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!changing');
    });
  }
  
}