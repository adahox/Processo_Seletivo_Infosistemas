/**
 * created by Adão Dias
 */
const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");

const tsproject = ts.createProject('tsconfig.json');

gulp.task("clean", () => {
    return gulp.src('dest', { allowEmpty: true }).pipe(clean());
});

gulp.task("statics", () => {
    return gulp.src(['src/**/*.json']).pipe(gulp.dest('dist'));
});

gulp.task('compile', () => {
    const project = tsproject.src().pipe(tsproject());
    return project.js.pipe(gulp.dest('dist'))
});


gulp.task("main", gulp.series('clean', 'statics', 'compile'));

gulp.task("watcher", () => {
    gulp.watch(['src/**/*.ts', 'src/**/*.json'], gulp.parallel('main'));
});

gulp.task("default", gulp.series('watcher'));