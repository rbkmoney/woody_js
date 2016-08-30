const gulp = require('gulp');
const pug = require('gulp-pug');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const header = require('gulp-header');

const config = {
    dist: 'dist'
};

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', '!src/gen-nodejs/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('browserify', () => {
    return browserify({
        entries: 'src/bootstrap.js',
        extensions: ['.js'],
        debug: true
    }).bundle()
        .pipe(source('woody.js'))
        .pipe(header('/* Build time: ${datetime} */ \n', {
            datetime: new Date()
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('uglify', ['browserify'], () => {
    return gulp.src(`${config.dist}/woody.js`)
        .pipe(rename('woody.min.js'))
        .pipe(uglify())
        .pipe(header('/* Build time: ${datetime} */ \n', {
            datetime: new Date()
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('index', () => {
    return gulp.src('sample/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('client', () => {
    return gulp.src('sample/client.js')
        .pipe(gulp.dest(config.dist));
});

gulp.task('watch', () => {
    gulp.watch('sample/index.pug', ['index']);
    gulp.watch('sample/client.js', ['client']);
    gulp.watch('src/**/*.js', ['browserify']);
});

gulp.task('server', () => {
    var started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('build', ['uglify']);
gulp.task('default', ['browserify', 'index', 'watch', 'client', 'server']);
