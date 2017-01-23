'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function readFiles(path) {
  fs.readdirSync(path).forEach((item) => {
    console.log(item);
    const thisDir = p.join('./', path, item);
    if (item == '_includes') {
      console.log(item);
    }
    if (item == '_templates') {
      console.log(item);
    } else {
      console.log('Neither templ nor incl ' + (item = '_includes') ? 'what the hell?' : item);
    }
  });
}


// Directories[item] = item;
// let thisDir = paths[p];
// fs.ensureDirSync(thisDir);
// }
