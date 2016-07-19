import * as  express from 'express';
import * as controllers from '../controller/userController'

export namespace UserAPI {
  export var signupRouter = express.Router();
  signupRouter.all('/', function (req, res, next) {
    next();
  })
    .post('/', controllers.UserController.signup)
    

  export var signinRouter = express.Router();
  signinRouter.post('/', controllers.UserController.signin)
  .get('/auth', controllers.UserController.authenticate)

}