/// <reference path="../../typings/index.d.ts" />

import * as mongoose from 'mongoose';
import database from '../Database/database';

var Schema = mongoose.Schema;

var GallerySchema = new Schema({
    memo: String,
    name: String,
    subject: String,
    file_name1: String,
    file_name2: String
});

export var Gallery = database.getDB().model('gallery', GallerySchema, 'gallery');


