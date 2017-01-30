'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function getPaths(path) {
  const Site = {};
  fs.readdirSync(path).map((item) => {
    if (fs.statSync(path + '/' + item).isDirectory()) {
      const thisDir = p.join(path, item);
      fs.readdirSync(thisDir).map((Item) => {
        const thisItem = p.join(thisDir, Item);
        if (!Site[item]) {
          Site[item] = [];
        }
        Site[item].push(thisItem);
      });
    } else if (fs.statSync(path + '/' + item).isFile()) {
      const thisFile = p.join(path, item);
      if (!Site[item]) {
        Site[item] = [];
      }
      Site[item].push(thisFile);
    }
  });
  return Site;
}
