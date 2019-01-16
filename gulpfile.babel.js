import gulp from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import css from './gulp/tasks/css';
import scripts from './gulp/tasks/scripts';
import server from './gulp/tasks/server';

gulp.task('css', css);
gulp.task('html', html);
gulp.task('build', build);
gulp.task('scripts', scripts);
gulp.task('server', server);

gulp.task('default', gulp.series('build'));
