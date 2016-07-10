import * as  express from 'express';
import * as controllers from '../controller/userController'

export namespace UserAPI {
  export var userRouter = express.Router();
  userRouter.all('/', function (req, res, next) {
    console.log('photos are requested!');
    next();
  }).post('/', controllers.UserController.signup);

}