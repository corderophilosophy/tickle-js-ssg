'use strict';
//  exports.exists taken from:
//  https://github.com/marijnh/heckle/blob/master/util.js(.exists)
// which is under the MIT license, which is the same license as this project

const fs = require('fs-extra');

exports.exists = function exists(file, dir) {
  try {
    return fs.statSync(file)[dir ? 'isDirectory' : 'isFile']();
  } catch (e) {
    return false;
  }
};
