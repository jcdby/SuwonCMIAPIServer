import * as controllers from './../controller/index';
import * as express from 'express';

export namespace ForumAPI
{
    export var forumRouter = express.Router();
    forumRouter.all('/', function (req, res, next) {
        console.log('forum API is requested!');
        next();
    })
        .get('/forumList',function(req, res) {
            controllers.ForumController.getForumList(req, res);
        })
        .get('/forumList/:forumState', function (req, res) {
            var forum_state = req.params.forumState;
            controllers.ForumController.getForum(forum_state, req, res);
        })
        .get('/forumList/:forumState/:topicState', function (req, res) {
            var forum_state = req.params.forumState;
            var topic_state = req.params.topicState;
            controllers.ForumController.getTopic(forum_state, topic_state, req, res);
        });
}

