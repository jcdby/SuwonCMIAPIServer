import * as mongoose from 'mongoose';
import database from './../Database/Database';
import {Gallery} from './../Models/GalleryModel';
import * as fs from 'fs';
import {Response} from "express";
import {Request} from "express";
import {log} from "util";
import * as moment from "moment";
import Multer = require("multer");




export namespace PhotoController {
     import File = Express.Multer.File;
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

        let imgs: Array = [];
        //save data information to db
        Object.keys(req.files).map(key => {
            let file: File;
            //move file from temp folder("uploads") to data/gallery folder .
            file = req.files[key];
            let newPath = "./public/data/gallery/" + moment().format() + file.originalname;
            imgs.push(newPath.replace("./public/", ""));

            fs.readFile(file.path, (err, data) => {
                if (err) throw err;
                fs.writeFile(newPath, data, (err) => {
                    if(err) throw err;
                });
            });

            //delete the temp img file
            fs.unlink(file.path, (err) => {
                if(err) throw err;
            });

        });


        let gallery = new Gallery({
            memo: req.body.memo,
            name: req.body.username,
            subject: req.body.subject,
            files: imgs,
            reg_date: Date.now()
        });

        gallery.save(err => {
            if(err) throw err;
            console.log("saved!")
        })






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

