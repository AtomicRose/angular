'use strict';

var gulp = require('gulp');//gulp构建基础
var clean = require('gulp-rimraf');//清空文件夹
var sourcemaps = require('gulp-sourcemaps');//sourcemaps工具
var sass = require('gulp-sass');//编译sass

var frameworkPaths = {
    jsPath: [
        'framework/js/**/*.js'
    ],
    sassPath: [
        'framework/framework.scss'
    ]
};

var componentsPaths = {
    componentJsPath:['components/**/*.js'],
    viewPath: ['components/**/*.html'],
    sassPath: ['components/**/*.scss']
};

var appPaths = {
    appJsPath: ['app/config/**/*.js'],
    modulesJsPath:['app/modules/**/*.js'],
    viewPath: ['app/modules/**/*.html'],
    sassPath: ['app/modules/*.scss']
};

/**
 * 清除当前目录
 */
gulp.task('clean', function (callback) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return gulp.src(['dist/', 'rev/'], {read: false})
        .pipe(clean());
});

/**
 * 构建framework bass css
 */
gulp.task('framework-sass', function(){
    return gulp.src(frameworkPaths.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/framework/'));
});

gulp.task('sourceBuild',['framework-sass'], function(){

});
gulp.task('build', ['clean'], function(){
    return gulp.start('sourceBuild');
});

gulp.task('default', ['clean'] ,function(){

});