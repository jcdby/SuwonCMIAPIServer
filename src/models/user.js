import mongoose from 'mongoose'
import database from './../Database/database'

let Schema = mongoose.Schema;

let UserSchema = Schema({
  username: String,
  password: String
});

let User = database.getDB().model('user', UserSchema, 'users');

module.exports = User;
