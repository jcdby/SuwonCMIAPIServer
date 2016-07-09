import users from './../models/user';
import mongoose from 'mongoose';
import database from './../Database/database'


export default class userController {
    constructor() {

    }

    signup(req, res) {
        //check if user is existed
        users.find({username: req.body.username})

      let user = new users(req.body);

        user.save(function (err, item) {
                if (err) throw err;
                // object of all the users
                res.send(item.username + ' is created!' );
            });
    }
}