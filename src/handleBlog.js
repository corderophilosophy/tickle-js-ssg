'use strict';
const fs = require('fs-extra');
const p = require('path');
const marked = require('marked');

const parser = require('./littlePostParser');
const namePost = require('./namePost');

module.exports = function(blogDir) {
  const Posts = {};
  fs.readdirSync(blogDir).forEach(file => {
    let date = file.match(/^(\d{4})-(\d\d?)-(\d\d?)-(.+)\.(md|markdown|html)$/);
    if (!date) {
      return;
    }
    const d = `${date[1]}-${date[2]}-${date[3]}`;
    const post = parser(p.join(blogDir, file));
    const _id = namePost(file);
    const Post = Object.assign(post, {main: marked(post.main), date: d});
    Posts[_id] = Post;
  })
  return Posts;
};
