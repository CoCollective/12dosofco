"use strict";



var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
var server = require("gulp-develop-server");
var autoPrefixer = require('gulp-autoprefixer');


gulp.task("default", function () {
	gulp.start("styles", "scripts");
});


gulp.task("watch", function () {
	gulp.watch("css/src/*.scss", ["styles"]);
	//gulp.watch("js/*.js", ["scripts"]);
});


gulp.task("styles", function () {
	gulp.src("css/src/*.scss")
		.pipe(sass())
		.pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(concat("main.min.css"))
		.pipe(minifyCSS())
		.pipe(gulp.dest("css"));
});


gulp.task("scripts", function () {
	gulp.src([
		"js/vendor/jquery/jquery.min.js",
		"js/vendor/greensock/TweenMax.min.js",
		"js/vendor/greensock/plugins/ScrollToPlugin.min.js",
		"js/vendor/greensock/plugins/KineticPlugin.min.js",
		"js/vendor/greensock/utils/Draggable.min.js",
		"js/main.js"
	])
		.pipe(concat("main.min.js"))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(gulp.dest("js"));
});


gulp.task("server:start", function() {
	server.listen({path: "app.js"});
	gulp.watch(["app.js"], server.restart);
});
