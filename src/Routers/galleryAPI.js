import photoController from './../controller/photoController';
let photo_contr = new photoController();

var express = require('express');
var router = express.Router();

router.all('/', function (req, res, next) {
    console.log('photos are requested!');
    next();
}).get('/', photo_contr.getGalleryList);

module.exports = router;
