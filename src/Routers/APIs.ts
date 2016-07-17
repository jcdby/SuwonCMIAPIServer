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
    app.use('/articles', routers.ArticleRouter.articleRouter);
    app.use('/forum', routers.ForumAPI.forumRouter);
    app.use('/photos', passport.authenticate('jwt'), routers.GalleryAPI.galleryRouter);
    app.use('/signup', routers.UserAPI.signupRouter);
    app.use('/signin', routers.UserAPI.signinRouter);

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!changing');
    });
  }
  
}