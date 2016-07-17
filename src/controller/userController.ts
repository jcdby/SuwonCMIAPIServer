import {User} from './../Models/UserModel';
import database from './../Database/Database';
import {Crypto} from './../Securiry/Crypto';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import {config} from './../Config/configs'

export namespace UserController {
        export function signup(req: express.Request, res: express.Response) {
                //check if user is existed
                User.findOne({ username: req.body.username }, function (err: any, item: any) {
                        if (err) throw err;
                        if (item) {
                                res.send(item.username + ' is existed')
                        } else {
                                //encrypt password 
                                let password: string = Crypto.bcryptHash(req.body.password);
                                let user = new User(req.body);
                                user.password = password;

                                user.save(function (err: any, item: any) {
                                        if (err) throw err;
                                        // object of all the users
                                        res.send(item + ' is created!');
                                });
                        }
                })
        }

        export function signin(req: express.Request, res: express.Response) {
                User.findOne({username: req.body.username}, (err: any, item: any) => {
                        if (err) throw err;
                        if(!item){
                                res.send({
                                        isSuccess: false,
                                        errOn:'username',
                                        msg: 'user is not existed! please Sign up!'
                                })
                        }else{
                               if(!Crypto.bcryptCompare(req.body.password, item.password)){
                                       res.send({
                                               isSuccess: false,
                                               errOn: 'password',
                                               msg: 'password is wrong!'
                                       });
                               }else{
                                       //generate token and return
                                       let token: any = jwt.sign(req.body, config.JwtStrategy.secretOrKey, {});
                                       res.send({
                                               token: token,
                                               isSuccess: true
                                       });
                               }
                        }
                })
        }
}

