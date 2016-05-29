import photoController from './../controller/photoController';
let photo_contr = new photoController();


module.exports = function (app) {
    
    //article apis
    app.route('/articles/')
        .all(function (req, res, next) {
            console.log('article request is getted!')
            next();
        })
        .get(function (req, res, next) {
            res.send('getting articles')
        })


    //photos apis
    app.route('/photos/')
        .all(function (req, res, next) {
            console.log('photos are requested!')
            next();
        })
        .get(photo_contr.getMethod);


    //Main page api
    app.get('/', function (req, res) {
        res.send('Welcom to Suwon CMI church!changing');
    })
}