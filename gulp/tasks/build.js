import gulp from 'gulp';

import html from './html';
import css from './css';
import scripts from './scripts';

export default gulp.parallel(html, css, scripts);
