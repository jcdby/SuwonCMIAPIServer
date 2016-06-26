import mongoose from 'mongoose';



class database {

  
  constructor() {
    this.db = mongoose.createConnection('mongodb://192.168.99.100:32784/swcmi');
    
    this.getDB = this.getDB.bind(this);
  }  

  getDB() {
    return this.db;
  }
}

export default new database();