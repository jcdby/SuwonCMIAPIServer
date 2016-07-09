var express = require('express');
var router = express.Router();

router.all('/', function (req, res, next) {
    console.log('article request is getted!');
    next();
}).get('/', function (req, res) {
    res.send('getting articles')
});

module.exports = router;

