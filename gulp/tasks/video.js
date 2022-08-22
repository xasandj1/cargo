module.exports = ()=>
    $.gulp.task('videos', ()=>
        $.gulp.src($.path.src.videos)
            .pipe($.gulp.dest($.path.build.videos)).on('end', $.bs.reload)
    )