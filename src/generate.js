'use strict';
const fs = require('fs-extra');
const p = require('path');

const handleFiles = require('./handleFiles');
const handleBlog = require('./handleBlog');

module.exports = function generate(site) {
  const Site = {
    _includes: {},
    _templates: {},
    blog: {}
  };
  const regexp = /(\w+)\.[html|md|markdown]/;
  for (let dir in site) {
    site[dir].map((item) => {
      if (!!(p.extname(dir))) {
        Site[dir] = site[dir];
        return;
      }
      const itemName = p.parse(item).name;
      if (dir == 'blog') {
        Site[dir][itemName] = handleBlog(item);
      } else if (fs.statSync(item).isFile()) {
        if (item.match(regexp)[1]) {
          Site[dir][item.match(regexp)[1]] = handleFiles(item);
        } else { // TODO: Handle other filetypes
          throw new Error(`Incorrect filetype in ${site[dir]}`)
        }
      } else {
        Site[dir] = site[dir];
      }
    })
  }
  return Site;
}
    //
    // site[dir].map((item) => {
    //   console.log(`toplevel ${item}`);
    //   if (fs.statSync(item).isDirectory() && dir == 'blog') {
    //     console.log(`caught by isDirectory && 'blog' ${item}`)
    //     Site.blog.posts = handleBlog(item);
    //   } else if (fs.statSync(item).isFile()) {
    //     console.log(`item is a file: ${item}`)
    //     if (item.match(regexp)[1]) {
    //       console.log(`and the regex matched for ${item}`);
    //       Site[dir][item.match(regexp)[1]] = handleFiles(item);
    //     } else {  // TODO: Handle other filetypes
    //       throw new Error(`Incorrect filetype in ${site[dir]}`);
    //     }
    //   } else {
    //     console.log(`and finally we have ${item}`);
    //   }
    // });
