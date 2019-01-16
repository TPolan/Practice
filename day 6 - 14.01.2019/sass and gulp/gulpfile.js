// load modules
const gulp = require('gulp');
const del = require('del');
const livereload = require('gulp-livereload');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

// declare functions
function assetsClean(done) {
    return del(
        ['dist/**/*', '!dist/*.css'], 
        { force: true }
    );
}
function assetsPublish(done) {
    return gulp.src('src/assets/**/*')
      .pipe(gulp.dest('dist'));
}
function htmlPublish(done) {
    return gulp.src('src/assets/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'))
      .pipe(livereload());
}
function watchFiles(done) {
    gulp.watch("src/assets/**/*.html", htmlPublish);
    gulp.watch("src/scss/**/*.scss", scssCompile);
}
function livereloadStart(done) {
    livereload.listen();
}
function scssCompile(done) {
    return gulp.src('src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(csso())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'))
      .pipe(livereload());
}


// export tasks
exports.publish = gulp.series(assetsClean, assetsPublish);
exports.watch = gulp.parallel(livereloadStart, watchFiles);