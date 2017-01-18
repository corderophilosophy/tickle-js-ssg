'use strict';
const fs = require('fs-extra');
const util = require('./utils');

module.exports = function renderPosts(posts, template) {
  if (!util.exists(template)) {
    fs.writeFileSync('./src/templates/default.html');
  }
  const templ = fs.readFileSync(template, 'utf8').toString();
  const Posts = posts.map((post) => {
    let t = templ;
    t = t.replace('{{title}}', post.frontMatter.title);
    t = t.replace('{{content}}', post.main);
    let p = Object.assign(post, {main: t});
    return p;
  })
  return Posts;
};
