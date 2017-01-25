'use strict';
const fs = require('fs-extra');

module.exports = function(path) {
  return fs.readFileSync(path, 'utf8').toString();
}
