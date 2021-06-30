const gulp         = require('gulp');
const concat       = require('gulp-concat');
const csso         = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
const size         = require("gulp-size");
const gzip         = require("gulp-gzip");
const rename       = require("gulp-rename")
sass.compiler      = require('node-sass');

/**
 * Task: gulp css
 */
 gulp.task("css", function () {
    return gulp
        .src([
           // CodeMirror
          'node_modules/codemirror/lib/codemirror.css',
          'node_modules/codemirror/theme/elegant.css',

           // Blocks
           'blocks/Codemirror/block.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "last 1 version"
            ],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('codemirror.min.css'))
        .pipe(gulp.dest("blocks/Codemirror/dist/css/"))
        .pipe(size({ showFiles: true }))
        .pipe(gzip())
        .pipe(rename("codemirror.min.css.gz"))
        .pipe(gulp.dest("blocks/Codemirror/dist/css/"))
        .pipe(size({ showFiles: true, gzip: true }));
});

/**
 * Task: gulp js
 */
 gulp.task('js', function () {
    return gulp
        .src([
            // CodeMirror
            'node_modules/codemirror/lib/codemirror.js',
            'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
            'node_modules/codemirror/mode/xml/xml.js',
            'node_modules/codemirror/mode/javascript/javascript.js',
            'node_modules/codemirror/mode/php/php.js',
            'node_modules/codemirror/mode/clike/clike.js',
            'node_modules/codemirror/mode/markdown/markdown.js',
            'node_modules/codemirror/mode/css/css.js',
            'node_modules/codemirror/mode/twig/twig.js',
            'node_modules/codemirror/mode/yaml/yaml.js',
            'node_modules/codemirror/mode/yaml-frontmatter/yaml-frontmatter.js',

            // Blocks
            'blocks/Codemirror/block.js'
        ])
        .pipe(concat('codemirror.min.js'))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('blocks/Codemirror/dist/js/'))
        .pipe(gzip())
        .pipe(rename("codemirror.min.js.gz"))
        .pipe(gulp.dest("blocks/Codemirror/dist/js/"))
        .pipe(size({ showFiles: true, gzip: true }));
});


/**
 * Task: gulp default
 */
gulp.task('default',
    gulp.series(
        'css',
        'js'
    )
);

/**
 * Task: gulp watch
 */
gulp.task('watch', function () {
    gulp.watch(
        ["blocks/**/*.html", "assets/src/"],
        gulp.series('default')
    );
});