var path = require('path');
const nodemon = require('gulp-nodemon');
var rootDir = require('../util/get-root-dir')();

module.exports = function (gulp) {
    return function () {

        var entryFile = path.join(rootDir, 'distTs', 'index.js');
        var ignoreList = [
            path.join(rootDir, 'src', '**'),
            path.join(rootDir, 'node_modules', '**'),
            path.join(rootDir, 'bower_components', '**'),
            path.join(rootDir, 'typings', '**')
        ];


        //gulp.watch([typeScriptFolder + '/**/*.ts'], ['ts-compile']);


        //gulp.task('node', ['ts-watch'], function () {
        nodemon({
            //script: 'distTs/index.js',
            script: entryFile,
            ext: 'js,json',
            env: {
                'NODE_ENV': 'development'
            },
            //ignore: ['src/**', 'node_modules/**', 'bower_components/**', 'typings/**']
            ignore: ignoreList
        });
        //});
    }
};
