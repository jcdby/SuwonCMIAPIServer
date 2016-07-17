import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
import {APIRouter} from '../Routers/APIs';
import {allowCrossDomain} from '../Middlewares/CORSmiddleware';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import {config} from '../Config/configs';
import * as expressSession from 'express-session';

import {passportConfig} from '../Config/passport.config';
passportConfig(passport);

export class Server {
  private options: JSONObject;
  private apiRouter: APIRouter;
  private strategis: Array<passport.Strategy>; //list of strategies used

  constructor(options?: JSONObject) {
    this.options = options || {};
    this.apiRouter = new APIRouter(passport);
  }

  start() {
    let app: express.Express = express();
    var upload: multer.Instance = multer(); // for parsing multipart/form-data

    //Server Middlewares configuration part
    app.use(allowCrossDomain);
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(expressSession({secret: 'swcmi'}));

    

    //To use passport 
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

    //start router
    this.apiRouter.init(app);


    //port
    app.listen(10000, function () {
      console.log('SuWon church API Server listening on port 10000!')
    });

  }


}
 interface JSONObject {
  [key: string]: any
}