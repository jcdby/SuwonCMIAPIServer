import express from 'express'
import articleAPI from './articleAPI';
import galleryAPI from './galleryAPI';
import userController from './../controller/userController'
let user_contro = new userController();


module.exports = function (app) {
    app.use(express.static('./src/public'));
    app.use('/articles', articleAPI);
    app.use('/photos', galleryAPI);

    app.route('/signup')
        .post(user_contro.signup);

    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcome to Suwon CMI church!changing');
    })
};

