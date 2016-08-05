import * as mongoose from 'mongoose';
import database from './../Database/Database';
import {Gallery} from './../Models/GalleryModel';
import * as fs from 'fs';
import {Response} from "express";
import {Request} from "express";
import {log} from "util";



export namespace PhotoController {
     export function getGalleryList(req: Request, res: Response, next: any) {
        Gallery.find({})
            .limit(10)
            .skip(req.query.skip)
            .sort('-reg_date')
            .exec(function (err: any, items: any) {
                if (err) throw err;
                // object of all the users

                Gallery.count({}, (err: any, count: any) => {
                    if (err) throw err;
                    let result: any = {
                        items:null,
                        count:null
                    };
                    result.items = items;
                    result.count = count;
                    res.json(result);
                })

            });
    }

    export function uploadPhoto(req: Request, res: Response) {
        console.log('uploaded!');
        console.log(req.files);
        console.log(req.body);
        return res.send({isSuccess: true, data: req.body});
        // fs.readFile(req.body[0], (err, data) => {
        //     // if(err) throw err;
        //     console.log(data);
        //     // let newPath = __dirname + '/public/data/test'
        //     // fs.writeFile(newPath, data, (err) => {
        //     //     if (err) throw err;
        //     //     res.send({isSuccess: true});
        //     // });
        // })
    }

}

