'use strict';
/**
 * Deletes CSS files previously built using build-css script.
 */

const cssRootDir = 'src/components/shared/scss/';
const fileFilter = '.css';
let files = []; // files to delete

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

process.env.NODE_ENV = 'development';

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const path = require('path');

const home = process.cwd();
const rootFolder = path.join(home, cssRootDir);

const fileList = (dir, filt = '') =>
  fs.readdirSync(dir)
    .reduce((files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory() ?
        files.concat(fileList(path.join(dir, file))) :
        files.concat(path.join(dir, file)),
      [])
    .filter(f => {if (f && f.endsWith(filt)) return f});

const deleteFiles = (files) => {
  files.forEach(file => {
    console.log('deleting ...' , file);
    fs.unlinkSync(file);
  });
}

const doDelete = () => {
  files = fileList(rootFolder, fileFilter);
  deleteFiles(files);
}

try {
  doDelete();
  if (files.length > 0) {
    console.log('CSS files deleted:', files);
  } else {
    console.log('No CSS files to delete');
  }
  process.exit();
} catch (e) {
  console.error('Problem deleting CSS files', e);
  process.exit(1);
}
