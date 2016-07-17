var rootDir = require('../util/get-root-dir')();
var path = require('path');

const ts = require('gulp-typescript');

module.exports = function (gulp) {
    return function () {
        var configPath = path.join(rootDir, 'tsconfig.json');
        var destFolder = path.join(rootDir, 'distTs');

        var tsProject = ts.createProject(configPath);
        tsProject.src()
            .pipe(ts(tsProject))
            .js.pipe(gulp.dest(destFolder));
    }
};
