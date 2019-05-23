const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const frontnote = require("gulp-frontnote");
const uglity = require("gulp-uglify");
const browser = require("browser-sync");
const plumber = require("gulp-plumber");
const connect = require('gulp-connect-php');

gulp.task("sass", done=> {
    gulp.src("sass/**/*.scss")
    .pipe(plumber())
    .pipe(frontnote())
    .pipe(sass({outputStyle:'expanded'}))

    .pipe(autoprefixer())
    .on('error',sass.logError)
    .pipe(gulp.dest("./css"))
    .pipe(browser.reload({stream:true}));
    // gulp4.0以降の場合は完了通知を追加する必要がある
    done()
});

gulp.task("js",done=>{
    gulp.src(["js/**/*.js","!js/complession/**/*.js"])
    .pipe(plumber())


    .pipe(frontnote({
        css: '../css/style.css'
    }))


    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(uglity())
    .pipe(gulp.dest("./js/complession"))
    .pipe(browser.reload({stream:true}));
    done()

});

gulp.task('default',done=>{
    gulp.watch('sass/**/*.scss',gulp.task('sass')); // Sassの自動コンパイル
    gulp.watch(["js/**/*.js","!js/complession/**/*.js"],gulp.task('js'));
    gulp.series("sass", "js");
    gulp.watch('./**',gulp.task('reload'));
    done()
});

gulp.task("server",done=>{
    connect.server({
        port: 8889,
        base: './'
    },done=>{
    browser({
        proxy: 'localhost:8889'
　　});
　});
done()
});

gulp.task('reload', function () {
browser.reload();
});