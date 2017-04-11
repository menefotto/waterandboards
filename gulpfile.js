var gulp = require('gulp');
var gutil = require('gulp-util');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var browserify = require('browserify');
var webserver = require('gulp-webserver');
var source = require('vinyl-source-stream');

// var sourcemaps = require('gulp-sourcemaps');
// add custom browserify options here
var customOpts = {
  entries: ['./public/app.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 

// add transformations here
b.transform("babelify", {presets: ["es2015", "react","stage-0"]});

// bundle function
function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    // .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./public'));
}

gulp.task('server', function () {
  return gulp.src('./public')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default',["server"], bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal



