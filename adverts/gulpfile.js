var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');


gulp.task('sass', function () { 
     return gulp.src('./assets/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    gulp.src([
                './assets/javascripts/jquery-2.1.4.js',
                './assets/javascripts/script.js'
        ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', function () {
    gulp.watch('./assets/styles/**/*.scss', ['sass']);
    gulp.watch('./assets/javascripts/**/*.js', ['js']);
});