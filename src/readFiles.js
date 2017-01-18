'use strict';
const fs = require('fs-extra');
const marked = require('marked');
const parser = require('./littlePostParser');

module.exports = function readFiles(path) {
  const posts = [];
  fs.ensureDirSync(path);
  fs.readdirSync(path).forEach(file => {
    let date = file.match(/^(\d{4})-(\d\d?)-(\d\d?)-(.+)\.(md|markdown|html)$/);
    if (!date) {
      return;
    }
    const d = `${date[3]}.${date[2]}.${date[1]}`
    const post = parser(path + '/' + file);
    const name = date[4];
    const Post = Object.assign(post, { main: marked(post.main), name: name, date: d });
    posts.push(Post);
  });
  return posts;
};
