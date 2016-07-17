import * as mongoose from 'mongoose';
import database from './../Database/Database';
import {Forum} from './../Models/ForumModel';


export namespace ForumController {
    export function getForumList(req: any, res: any) {
        console.log("get /forumList");
        /*
             state
             title
             subtitle
             description
             active
             author
             topic_list with only state and title
         */
        Forum
            .find({})
            .select('-_id -topics_list.author -topics_list.description -topics_list.creation_date -topics_list.posts_list')
            .exec(function (err, items) {
                if (err) throw err;
                res.json(items);
            });
    }

    export function getForum(forumState:any, req:any, res:any) {
        console.log("get /:forumState with forumState = " + forumState);
        //
        //fs.readFile(FORUM_FILE, function (err, data) {
        //    if (err) {
        //        console.error(err);
        //        process.exit(1);
        //    }
        //    var forum = getByState(forum_state, data)[0];
        //    console.log('(stringified) forum: \n' + JSON.stringify(forum));
        //    res.json(forum);
        //});


    }

    export function getTopic(forum_state:any, topic_state:any, req:any, res:any) {
        console.log("get /forumList/:forumState/:topicState with forumState = " + forum_state + 'and topicState = ' + topic_state);
        //fs.readFile(TOPIC_FILE, function (err, data) {
        //    if (err) {
        //        console.error(err);
        //        process.exit(1);
        //    }
        //    var forum = getByState(topic_state, data)[0];
        //    console.log('(stringified) topic: \n' + JSON.stringify(forum));
        //    res.json(forum);
        //});
    }
}

