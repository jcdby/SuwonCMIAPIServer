import express from 'express'
import articleAPI from './articleAPI';
import galleryAPI from './galleryAPI';

module.exports = function (app) {
    app.use(express.static('./src/public'));

    app.use('/articles', articleAPI);
    app.use('/photos', galleryAPI);

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!changing');
    })
};