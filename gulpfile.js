const gulp = require('gulp');
const babel = require('gulp-babel');
const babeles2015 = require('babel-preset-es2015');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
    return gulp.src('./app/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

gulp.task('stream-js', function () {
    return watch('./app/**/*.js')
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  gulp.src('./assets/css/**.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./assets/build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/build'))
});

gulp.task('stream-css', function () {
    return watch('./assets/css/**.css')
        .pipe(gulp.dest('./assets/build'));
});

gulp.task('default', ['stream-css']);
