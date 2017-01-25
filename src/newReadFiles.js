'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function readFiles(path) {
  const _includes = [], _templates = [], blog = [];
  fs.readdirSync(path).map((item) => {
    const thisDir = p.join(path, item);
    fs.readdirSync(thisDir).map((Item) => {
      const thisItem = p.join(thisDir, Item);
      if (item == '_includes') {
        _includes.push(thisItem);
      }
      if (item == '_templates') {
        _templates.push(thisItem);
      }
      if (item == 'blog') {
        blog.push(thisItem);
      }
    })
  });
  return { _includes, _templates, blog };
}
