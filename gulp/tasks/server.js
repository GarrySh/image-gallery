import browserSync from 'browser-sync';
import { browserSyncConfig } from '../config';

export default () => browserSync.init(browserSyncConfig);

export const reload = callback => {
  browserSync.reload();
  callback();
};
