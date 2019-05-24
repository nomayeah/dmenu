const gulp          = require("gulp"),
      browserSync   = require("browser-sync"),
      sass          = require("gulp-sass"),
      autoprefixer  = require("gulp-autoprefixer"),
      glob          = require("gulp-sass-glob"),
      notify        = require('gulp-notify'),
      plumber       = require("gulp-plumber"),
      babel         = require('gulp-babel'),
      uglify        = require("gulp-uglify-es").default,
      imagemin      = require("gulp-imagemin"),
      mozjpeg       = require("imagemin-mozjpeg"),
      pngquant      = require("imagemin-pngquant"),
      changed       = require('gulp-changed'),
      connect       = require('gulp-connect-php');

const paths = {
  root: "dist/",
  scssPath: "src/scss/**/*.scss",
  jsPath: "src/js/**/*.js",
  imgPath: "src/img/**/*",
  outputCss: "dist/assets/css",
  outputJs: "dist/assets/js",
  outputImg: "dist/assets/",
};

// sass
function funcScss() {
    return gulp.src(paths.scssPath , {
        sourcemaps: true
    })
    .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(glob())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(paths.outputCss), {
        sourcemaps: './sourcemaps'
    })
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
      cascade: false
    }))
    .pipe(gulp.dest(paths.outputCss), {
        sourcemaps: './sourcemaps'
    })
    .pipe(browserSync.stream());
}

// js
function funcJs() {
  return gulp.src(paths.jsPath , {
    sourcemaps: true
  })
  .pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>'),
  }))
  .pipe(babel())
  .pipe(uglify({}))
  .pipe(gulp.dest(paths.outputJs));
}

// img
function funcImg() {
  return gulp.src(paths.imgPath)
  .pipe(changed(paths.outputImg))
  .pipe(gulp.dest(paths.outputImg))
  .pipe(imagemin(
    [
      mozjpeg({
        quality: 80 //画像圧縮率
      }),
      pngquant()
    ],
    {
      verbose: true
    }
  ))
}

// watch
function funcWatch(done) {
  gulp.watch(paths.scssPath, gulp.parallel(funcScss));
  gulp.watch(paths.jsPath, gulp.parallel(funcJs));
  gulp.watch(paths.imgPath, gulp.parallel(funcImg));
  done();
}

// scripts tasks
gulp.task('default',
  gulp.parallel(
    funcWatch, funcScss, funcJs,funcImg
  )
);

gulp.task("server", function() {
  connect.server({
      port: 8889,
      base: './'
  }, function (){
    browserSync({
      proxy: 'localhost:8889'
　　});
　});
});
