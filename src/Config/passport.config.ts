import * as passport from 'passport'
import * as authentication from './../Authentication/index';
import {config} from './configs';
import {User} from '../Models/UserModel'

export function passportConfig(passport: passport.Passport) {
  let strategy: passport.Strategy = new authentication.JwtStrategy(config.JwtStrategy);
  passport.serializeUser(function (username, done) {
    done(null, username);
  });

  passport.deserializeUser(function (username, done) {
    User.find({username: username}, function (err: any, user: any) {
      done(err, user);
    });
  });

  

  //use jwtstrategy
  passport.use(new authentication.JwtStrategy(config.JwtStrategy));
}