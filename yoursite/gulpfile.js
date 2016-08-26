var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    less = require('gulp-less');

gulp.task('less', function () { 
    return gulp.src('./app/styles/style.less')
      .pipe(less())
      .pipe(autoprefixer(
                {
                    browsers: [
                        '> 1%',
                        'last 2 versions',
                        'firefox >= 4',
                        'safari 7',
                        'safari 8',
                        'IE 9',
                        'IE 10',
                        'IE 11'
                    ],
                    cascade: false
                }
            ))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('images', function() {
    gulp.src('./app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/'))
});

gulp.task('watch', function () {
	gulp.watch('./app/styles/**/*.less', ['less']); 
	gulp.watch('./app/images/**/*', ['images']);
});