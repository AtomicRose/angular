'use strict';

/**
 *  Here is the app build config
 */
var THEME_NAME = 'default';
var COMPONENTS_LIST = ['dialog', 'iScroll'];

/**************************************/


var gulp = require('gulp');//gulp构建基础
var clean = require('gulp-rimraf');//清空文件夹
var sourcemaps = require('gulp-sourcemaps');//sourcemaps工具
var sass = require('gulp-sass');//编译sass
var uglify = require('gulp-uglify');//压缩js
var concat = require('gulp-concat');//合并文件
var connect = require('gulp-connect');//创建服务
var template = require('gulp-template');//静态模板内容替换

var frameworkPaths = {
    jsPath: [
        'framework/js/lib/angular.js',
        'framework/js/lib/angular-ui-router.js',
        'framework/js/provider/**/*.js'
    ],
    sassPath: [
        'framework/*.scss'
    ]
};

var componentsPaths = {
    componentsJsPath: [],
    modulesJsPath: ['components/**/*.js'],
    sassPath: ['components/**/*.scss']
};

var appPaths = {
    appJsPath: [
        'app/app.js',
        'app/config/**/*.js',
        'app/modules/**/*.js'
    ],
    modulesJsPath: ['app/**/*.js'],
    sassPath: ['app/modules/*.scss']
};

var viewPath = [
    '{app,components,framework}/**/*.html',
    'index.html'
];

/**
 * 清除当前目录
 */
gulp.task('clean', function (callback) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return gulp.src(['dist/', 'rev/'], {read: false})
        .pipe(clean());
});

/**
 * 构建framework-css
 */
gulp.task('framework-sass', function () {
    return gulp.src(frameworkPaths.sassPath)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/framework/'));
});
gulp.task('framework-sass-debug', function () {
    return gulp.src(frameworkPaths.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/framework/'));
});
/**
 * 构建framework -js
 */
gulp.task('framework-js', function () {
    return gulp.src(frameworkPaths.jsPath)
        .pipe(concat('framework.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/framework/'));
});
gulp.task('framework-js-debug', function () {
    return gulp.src(frameworkPaths.jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('framework.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/framework/'));
});
/**
 * 构建component-js
 */
gulp.task('components', function () {
    for (var i = 0, length = COMPONENTS_LIST.length; i < length; i++) {
        gulp.src('components/' + COMPONENTS_LIST[i] + '/**/*.js')
            .pipe(concat(COMPONENTS_LIST[i] + '.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/components/'));
        gulp.src('components/' + COMPONENTS_LIST[i] + '/'+COMPONENTS_LIST[i]+'.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('dist/components/'));
    }
    return true;
});
gulp.task('components-debug', function () {
    for (var i = 0, length = COMPONENTS_LIST.length; i < length; i++) {
        gulp.src('components/' + COMPONENTS_LIST[i] + '/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(concat(COMPONENTS_LIST[i] + '.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/components/'));
        gulp.src('components/' + COMPONENTS_LIST[i] + '/'+COMPONENTS_LIST[i]+'.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/components/'));
    }
    return true;
});

/**
 * 构建app -js
 */
gulp.task('app-js', function () {
    return gulp.src(appPaths.appJsPath)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/app/'));
});
gulp.task('app-js-debug', function () {
    return gulp.src(appPaths.appJsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/'));
});
// /**
//  * 构建app-modules-js
//  */
// gulp.task('app-module-js', function(){
//     return gulp.src(appPaths.modulesJsPath)
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/app/'));
// });
// gulp.task('app-module-js-debug', function(){
//     return gulp.src(appPaths.modulesJsPath)
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('dist/app/'));
// });
/**
 * 构建html
 */
gulp.task('html', function () {
    return gulp.src(viewPath)
        .pipe(template({THEME_NAME: THEME_NAME}))
        .pipe(gulp.dest('dist/'));
});

/**
 * 所有资源编译
 */
gulp.task('sourceBuild', ['framework-sass', 'framework-js', 'app-js', 'components', 'html'], function () {
});
gulp.task('sourceBuild-debug', ['framework-sass-debug', 'framework-js-debug', 'app-js-debug', 'components-debug', 'html'], function () {
});
gulp.task('build', ['clean'], function () {
    return gulp.start('sourceBuild');
});

gulp.task('debug', ['clean'], function () {
    return gulp.start('sourceBuild-debug');
});

gulp.task('default', function () {
    return gulp.start('build');
});
gulp.task('fileWatch', ['debug'], function () {
});

gulp.task('serve', function () {
    gulp.start('debug');
    connect.server({
        livereload: true,
        root: './dist',
        port: 30000
    });
    gulp.watch(['./app/**/*.*', './doc/**/*.*', './components/**/*.*', './framework/**/*.*', './config/**/*.*', './gulpfile.js', 'index.html'], ['fileWatch']);
});
