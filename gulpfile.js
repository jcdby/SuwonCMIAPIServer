var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');

var tsProject = ts.createProject("tsconfig.json");

var nodeExternals = require('webpack-node-externals');


gulp.task('tscompile', function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest("distTs"))
});

gulp.task('default', function () {
  return gulp.src('server.js')
    .pipe(webpack({
      watch: true,
      target: 'node',
      externals: [nodeExternals()],
      output: {
        filename: 'server.js',
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.json/,
            loader: 'json'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(nodemon({
      script: 'dist/server.js'
    })
      .on('restart', function () {
        console.log('restarted!')
      })
    )


});


