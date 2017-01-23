'use strict';
const fs = require('fs-extra');
const marked = require('marked');
const parser = require('./littlePostParser');

module.exports = function readFiles(paths) {
  const posts = [], templates = [], includes = [];
  for (let p in paths) {
    let thisDir = paths[p];
    fs.ensureDirSync(thisDir);
    fs.readdirSync(thisDir).forEach((item) => {
      if (fs.statSync(thisDir + '/' + item).isDirectory()) {
        
      }
    })
  }
  // fs.readdirSync(path).forEach(file => {
  //   let date = file.match(/^(\d{4})-(\d\d?)-(\d\d?)-(.+)\.(md|markdown|html)$/);
  //   if (!date) {
  //     return;
  //   }
  //   const d = `${date[1]}/${date[2]}/${date[3]}`;
  //   const post = parser(path + '/' + file);
  //   const name = date[4];
  //   const Post = Object.assign(post, { main: marked(post.main), name: name, date: d });
  //   posts.push(Post);
  // });
  return posts;
};
