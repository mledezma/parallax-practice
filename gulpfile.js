var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function(){
    return gulp.src('app/*.pug') // Gets all files ending with .scss in app/scss
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream()) 
}); 

gulp.task('watch', ['sass', 'pug'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });

    gulp.watch('app/sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('app/**/*.pug', ['pug']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});

gulp.task('js', function(){
    return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('./js'))
});

gulp.task('images', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('./img'))
});

gulp.task('build', ['sass', 'images', 'pug', 'js'/*, 'watch'*/]);