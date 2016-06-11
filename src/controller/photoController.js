import gallery from './../models//gallery';
import mongoose from 'mongoose';
import database from './../Database//database'


export default class photoController {
    constructor() {

    }

    getMethod(req, res, next) {


        gallery.find({}, function (err, items) {
                if (err) throw err;
                // object of all the users
                res.json(items);
            });


    }
}