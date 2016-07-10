import {User} from './../models/tsuser';
import database from './../Database/database'

export namespace UserController {
        export function signup(req: any, res: any) {
                //check if user is existed
                User.find({ username: req.body.username })

                let user = new User(req.body);

                user.save(function (err: any, item: any) {
                        if (err) throw err;
                        // object of all the users
                        res.send(item.username + ' is created!');
                });
        }
}

