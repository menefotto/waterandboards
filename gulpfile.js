var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
var source = require('vinyl-source-stream');

var production = process.env.NODE_ENV === 'production';


function handleError(task) {
  return function(err) {
    gutil.log(gutil.colors.red(err));
    notify.onError(task + ' failed, check the logs..')(err);
  };
}

function scripts(watch) {
    var bundler, rebundle;
    bundler = browserify('./public/index.js', {
          basedir: __dirname, 
          debug: !production, 
          cache: {}, // required for watchify
          packageCache: {}, // required for watchify
          fullPaths: watch // required to be true only for watchify
        });
    if(watch) {
          bundler = watchify(bundler) 
        }


    bundler.transform(babelify, {presets: ['es2015', 'react']});

    rebundle = function() {
          var stream = bundler.bundle();
          stream.on('error', handleError('Browserify'));
          stream = stream.pipe(source('bundle.js'));
          return stream.pipe(gulp.dest('./public/'));
        };

    bundler.on('update', rebundle);
    return rebundle();
}


gulp.task('scripts', function() {
    return scripts(false);
});


gulp.task('watchScripts', function() {
    return scripts(true);
});


gulp.task('default', ['watchScripts', 'scripts'])
