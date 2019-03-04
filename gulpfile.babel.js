import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './popup/webpack.config';
import eventWebpackConfig from './background/webpack.config';

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('copy-manifest', gulp.series('clean', () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
}));

gulp.task('background-js', gulp.series('clean', (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
}));

gulp.task('popup-js', gulp.series('clean', (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
}));


gulp.task('popup-html', gulp.series('clean', () => {
  return gulp.src('popup/src/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
}));

const tasks = ['copy-manifest', 'popup-js', 'background-js', 'popup-html']

gulp.task('build', gulp.parallel(...tasks));

gulp.task('default', () => {
  return gulp.watch('popup/**/*', gulp.series('build'));
});
