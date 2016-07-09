/// <reference path="../../typings/index.d.ts" />

import * as mongoose from 'mongoose';
import database from './../Database/database';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: String,
  password: String
});

export let User = database.getDB().model('user', UserSchema, 'users');


