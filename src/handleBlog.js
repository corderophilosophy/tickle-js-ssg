'use strict';
const fs = require('fs-extra');
const p = require('path');
const marked = require('marked');

const parser = require('./littlePostParser');
const namePost = require('./namePost');
const handleFiles = require('./handleFiles');

module.exports = function(blogDir) {
  if (fs.statSync(blogDir).isDirectory()) {
    const result = {};
    fs.readdirSync(blogDir).map(file => {
      let date = file.match(
        /^(\d{4})-(\d\d?)-(\d\d?)-(.+)\.(md|markdown|html)$/
      );
      if (!date) {
        return;
      }
      const d = `${date[1]}-${date[2]}-${date[3]}`;
      const post = parser(p.join(blogDir, file));
      const _id = namePost(file);
      const Post = Object.assign(post, {
        main: marked(post.main),
        date: d,
        name: file
      });
      result[_id] = Post;
    });
    return result;
  } else if (fs.statSync(blogDir).isFile()) {
    return blogDir;
  } else {
    throw new Error(`Incorrect file-type in ${blogDir}`);
  }
};
