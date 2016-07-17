var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');

var tsProject = ts.createProject("./tsconfig.json");

var nodeExternals = require('webpack-node-externals');


gulp.task('tscompile', function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest("distTs")) 
});

gulp.task('node', ['tscompile'], function () {
  nodemon({
    script: 'distTs/index.js',
    ext: 'js,json',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: ['src/**', 'node_modules/**', 'bower_components/**', 'typings/**']
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/' + '/**/*.ts'], ['tscompile'])
});

gulp.task('default', ['node', 'watch']);


