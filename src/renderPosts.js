'use strict';
const fs = require('fs-extra');
const util = require('./utils');

module.exports = function renderPosts(posts, path) {
  if (!Array.isArray(posts)) {
    posts = [posts];
  }
  fs.ensureDirSync(path);
  const Posts = posts.map((post) => {
    const templPath = `${path}/${post.frontMatter.base}`;
    let templ = fs.readFileSync(templPath, 'utf8').toString();
    // let t = templ;
    // t = t.replace('{{title}}', post.frontMatter.title);
    // t = t.replace('{{content}}', post.main);
    // let p = Object.assign(post, {main: t});
    // return p;
  });
  return Posts;
};
