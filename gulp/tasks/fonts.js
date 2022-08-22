module.exports = ()=>
    $.gulp.task('fonts', ()=>
        $.gulp.src($.path.src.fonts)
            .pipe($.gulp.dest($.path.build.fonts)).on('end', $.bs.reload)
    )