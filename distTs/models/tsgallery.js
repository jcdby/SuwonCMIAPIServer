"use strict";
var mongoose = require('mongoose');
var database_1 = require('../Database/database');
var Schema = mongoose.Schema;
var GallerySchema = new Schema({
    memo: String,
    name: String,
    subject: String,
    file_name1: String,
    file_name2: String
});
exports.Gallery = database_1.default.getDB().model('gallery', GallerySchema, 'gallery');
