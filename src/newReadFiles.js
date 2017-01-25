'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function readFiles(path) {
  const Site = {};
  fs.readdirSync(path).map((item) => {
    const thisDir = p.join(path, item);
    fs.readdirSync(thisDir).map((Item) => {
      const thisItem = p.join(thisDir, Item);
      if (!Site[item]) {
        Site[item] = [];
      }
      Site[item].push(thisItem);
    })
  });
  return Site;
}
