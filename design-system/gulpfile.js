const path = require('path');
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const concat = require('gulp-concat');
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const webpackDevServer = require("webpack-dev-server");

gulp.task("sass", function () {
  return gulp
    .src("src/components/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(concat('styles.css'))
    .pipe(gulp.dest("dist"));
});

gulp.task("webpack-dev-server", function () {
  const compiler = webpack(webpackConfig);
  new webpackDevServer(compiler, {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  }).listen(8080, "localhost", function (err) {
    if (err) throw err;
    console.log("Webpack dev server listening on port 8080");
  });
});

gulp.task("watch", function () {
  gulp.watch("src/components/**/*.scss", gulp.series("sass"));
});

gulp.task("dev", gulp.parallel("watch", "webpack-dev-server"));
