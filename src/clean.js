'use strict';
const fs = require('fs-extra');
const rimraf = require('rimraf');

const utils = require('./utils');

module.exports = function(dir) {
  if (utils.exists(dir, true)) {
    const newDir = './old_' + dir.slice(2)
    if (utils.exists(newDir, true)) {
      rimraf.sync(newDir);
    }
    try {
      fs.copySync(dir, newDir);
    } catch(err) {
      console.error(err);
    }
    rimraf.sync(dir);
    return true;
  } else {
    return false;
  }
}
