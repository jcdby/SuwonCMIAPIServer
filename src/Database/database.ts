/// <reference path="./../../typings/index.d.ts" />

import * as mongoose from 'mongoose';



class database {
  private db: any;
  
  constructor() {
    this.db = mongoose.createConnection('mongodb://swchurch:123456@ds023634.mlab.com:23634/swcmi');
    
    this.getDB = this.getDB.bind(this);
  }  

  getDB() {
    return this.db;
  }
}

export default new database();