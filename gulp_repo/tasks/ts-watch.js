var rootDir = require('../util/get-root-dir')();
const ts = require('gulp-typescript');
var path = require('path');

module.exports = function (gulp) {
    return function () {
        var typeScriptFolder = path.join(rootDir, 'src');
        gulp.watch([typeScriptFolder + '/**/*.ts'], ['ts-compile']);
    }

};
