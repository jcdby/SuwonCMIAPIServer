"use strict";
var mongoose = require('mongoose');
var database = (function () {
    function database() {
        this.db = mongoose.createConnection('mongodb://swchurch:123456@ds023634.mlab.com:23634/swcmi');
        this.getDB = this.getDB.bind(this);
    }
    database.prototype.getDB = function () {
        return this.db;
    };
    return database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new database();
