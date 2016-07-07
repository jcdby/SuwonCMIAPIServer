import gallery from './../models//gallery';
import mongoose from 'mongoose';
import database from './../Database//database'


export default class photoController {
    

    getGalleryList(req, res, next) {
        gallery.find({})
            .limit(10)
            .skip(req.query.skip)
            .sort('-reg_date')
            .exec(function (err, items) {
                if (err) throw err;
                // object of all the users
                
                gallery.count({}, (err, count) => {
                    if(err) throw err;
                    let result = {}
                    result.items = items;
                    result.count = count;
                    res.json(result);
                })

            });
    }   
}