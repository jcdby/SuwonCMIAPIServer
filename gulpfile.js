var gulp = require('./gulp_repo')();

gulp.task('default', ['ts-watch']);
gulp.task('server', ['server-watch']);
gulp.task('dev', ['ts-watch', 'server-watch']);
