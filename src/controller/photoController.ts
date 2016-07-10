import * as mongoose from 'mongoose';
import database from './../Database/Database';
import {Gallery} from './../Models/GalleryModel'


export namespace PhotoController {
     export function getGalleryList(req: any, res: any, next: any) {
        Gallery.find({})
            .limit(10)
            .skip(req.query.skip)
            .sort('-reg_date')
            .exec(function (err: any, items: any) {
                if (err) throw err;
                // object of all the users

                Gallery.count({}, (err: any, count: any) => {
                    if (err) throw err;
                    let result = {
                        items,
                        count
                    }
                    result.items = items;
                    result.count = count;
                    res.json(result);
                })

            });
    }
}

