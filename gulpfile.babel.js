import gulp from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import css from './gulp/tasks/css';
import clean from './gulp/tasks/clean';
import scripts from './gulp/tasks/scripts';
import server from './gulp/tasks/server';
import watch from './gulp/tasks/watch';
import dev from './gulp/tasks/dev';
import deploy from './gulp/tasks/deploy';

gulp.task('css', css);
gulp.task('html', html);
gulp.task('build', build);
gulp.task('clean', clean);
gulp.task('dev', dev);
gulp.task('scripts', scripts);
gulp.task('server', server);
gulp.task('watch', watch);
gulp.task('deploy', deploy);

gulp.task('default', gulp.series('build'));
