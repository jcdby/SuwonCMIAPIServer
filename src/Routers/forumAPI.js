/**
 * Created by fwavresky on 7/7/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

//var FORUM_FILE = path.join(__dirname, '..', 'data', 'forumList.json');
var FORUM_FILE = 'forum.json';
console.log("FORUM_FILE " + FORUM_FILE);
//console.log('C:/Users/wavresky/Desktop/FE/SuwonCMIAPIServer/src/data/forum.json');

router.all('/', function (req, res, next) {
    console.log("/forumList");
    next();
}).get('/forumList', function (req, res) {
    console.log('get');

    fs.readFile(FORUM_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});



module.exports = router;
