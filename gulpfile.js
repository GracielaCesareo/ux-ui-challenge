const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync').create();

/* Compile scss into css */

function style() {
    
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(prefixer('last 2 versions'))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;