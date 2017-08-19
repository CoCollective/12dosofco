"use strict";

const gulp = require("gulp");
const gulpUtil = require("gulp-util");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const server = require("gulp-develop-server");
const autoPrefixer = require('gulp-autoprefixer');


gulp.task("default", function () {
	gulp.start("styles", "scripts");
});


gulp.task("watch", function () {
	gulp.watch("src/css/*.scss", ["styles"]);
	gulp.watch("src/js/*.js", ["scripts"]);
});


gulp.task("styles", function () {
	gulp.src("src/css/main.scss")
		.pipe(sass())
		.pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(concat("../dist/main.min.css"))
		.pipe(minifyCSS())
		.pipe(gulp.dest("css"));
});


gulp.task("scripts", function () {
	gulp.src([
		"src/js/jquery.min.js",
		"src/js/holiday.js",
		"src/js/modernizr.js"
	])
		.pipe(concat("../dist/main.min.js"))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(gulp.dest("js"));
});


gulp.task("server:start", function() {
	server.listen({path: "app.js"});
	gulp.watch(["app.js"], server.restart);
});
