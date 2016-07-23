import * as express from 'express';
import * as routers from './APIRouterIndex';
import * as passport from 'passport';

export class APIRouter {

  private passport: passport.Passport;

  constructor(passport: passport.Passport) {
   this.passport = passport;
  }

  init(app: express.Express){

    app.use(express.static('./src/public'));
    app.use('/signup', routers.UserAPI.signupRouter);
    app.use('/signin',  (req: express.Request ,res: any,next: any) => {
      console.log(req.headers);
      next();
      
    },routers.UserAPI.signinRouter);
    app.use('/articles', routers.ArticleRouter.articleRouter);
    app.use('/forum', routers.ForumAPI.forumRouter);
    app.use('/photos', (req: express.Request ,res: any,next: any) => {
      console.log(req.headers);
      next();
      
    }, routers.GalleryAPI.galleryRouter);
    

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!');
    });
  }
  
}