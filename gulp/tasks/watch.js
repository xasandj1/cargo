module.exports = ()=>
    $.gulp.task('watch', ()=>{
        for (const key in $.path.watch) {
            $.gulp.watch($.path.watch[key], $.gulp.series(key))
        }
    })