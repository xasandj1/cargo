module.exports = ()=>
    $.gulp.task('images', ()=>
        $.gulp.src($.path.src.images)
            .pipe($.gulp.dest($.path.build.images)).on('end', $.bs.reload)
    )