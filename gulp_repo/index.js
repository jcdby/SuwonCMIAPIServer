var gulp = require('gulp');

var taskPath = __dirname + '/tasks/';

module.exports = function () {

    /*
     * Register gulp tasks
     * */
    var taskList = require('fs').readdirSync(taskPath);
    // Register tasks as task files
    taskList.forEach(function (taskFile) {
        var taskName = taskFile.replace('.js', '');
        gulp.task(taskName, require(taskPath + taskFile)(gulp)); // gulp is given as an option to every task
    });

    return gulp;
};



