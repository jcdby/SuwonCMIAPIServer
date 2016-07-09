/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import router from './src/Routers/APIs';
import { allowCrossDomain } from './src/Middlewares/CORSmiddleware';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
let app = express();
var upload = multer(); // for parsing multipart/form-data
//Server Middlewares configuration part
app.use(allowCrossDomain);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//start router
router(app);
//port
app.listen(10000, function () {
    console.log('SuWon church API Server listening on port 10000!');
});
