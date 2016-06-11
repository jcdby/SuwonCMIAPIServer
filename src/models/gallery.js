import mongoose from 'mongoose'
import database from './../Database//database'

var Schema = mongoose.Schema;

var GallerySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  no: String,  
  memo: String,
  ip: String,
  name: String,
  email: String,
  subject: String,
  file_name1: String,
  file_name2: String  
})

var Gallery = database.getDB().model('gallery', GallerySchema, 'gallery');

module.exports = Gallery;