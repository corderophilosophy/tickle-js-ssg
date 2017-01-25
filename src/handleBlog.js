'use strict';
const fs = require('fs-extra');
const p = require('path');
const v4 = require('uuid-v4');
const marked = require('marked');

const parser = require('./littlePostParser');

module.exports = function(blogDir) {
  const Posts = {};
  fs.readdirSync(blogDir).forEach(file => {
    let date = file.match(/^(\d{4})-(\d\d?)-(\d\d?)-(.+)\.(md|markdown|html)$/);
    if (!date) {
      return;
    }
    const _id = v4();
    const d = `${date[1]}/${date[2]}/${date[3]}`;
    const post = parser(p.join(blogDir, file));
    const name = date[4];
    const Post = Object.assign(post, {main: marked(post.main), name, date: d});
    Posts[_id] = Post;
  })
  return Posts;
};
