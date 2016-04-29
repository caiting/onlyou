var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    less   = require("gulp-less"),
    pngquant   = require("imagemin-pngquant"),
    imgmin = require("gulp-imagemin");

gulp.task('imagemin',function(){
    gulp.src('app/src/img/*')
        .pipe(imgmin({use: [pngquant()]}))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('concat', function () {
    gulp.src('app/src/js/*.js')//要合并的文件
        .pipe(uglify())
        .pipe(concat('lib.js'))// 合并匹配到的js文件并命名为 "lib.js"
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('lib.min.js'))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('compile-less', function () {
    gulp.src('less/tsb.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('default',['concat','compile-less','imagemin']);







