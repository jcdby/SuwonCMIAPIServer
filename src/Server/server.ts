import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
import {APIRouter} from '../Routers/APIs'
import {allowCrossDomain} from '../Middlewares/CORSmiddleware'

export class Server {
  private options: JSONObject;
  private apiRouter: APIRouter

  constructor(options?: JSONObject) {
    this.options = options || {}
    this.apiRouter = new APIRouter()
  }



  start() {
    let app: express.Express = express();
    var upload: multer.Instance = multer(); // for parsing multipart/form-data

    //Server Middlewares configuration part
    app.use(allowCrossDomain);
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    //start router
    this.apiRouter.init(app)


    //port
    app.listen(10000, function () {
      console.log('SuWon church API Server listening on port 10000!')
    })

  }


}
 interface JSONObject {
  [key: string]: any
}