import * as  express from 'express';



export namespace ArticleRouter {
    export var articleRouter = express.Router();
    articleRouter.all('/', function (req, res, next) {
        console.log('article request is getted!');
        next();
    }).get('/', function (req, res) {
        res.send('getting articles')
    });

};



