'use strict';
const fs = require('fs-extra');
const util = require('./utils');

module.exports = function renderPosts(posts, template) {
  if (!Array.isArray(posts)) {
    posts = [posts];
  }
  if (!util.exists(template)) {
    throw new Error('Error renderong posts. Check ./_config.json.post_template');
  }
  const Posts = posts.map((post) => {
    let templ = fs.readFileSync(template, 'utf8').toString();
    let t = templ;
    t = t.replace('{{title}}', post.frontMatter.title);
    t = t.replace('{{content}}', post.main);
    let p = Object.assign(post, {main: t});
    return p;
  });
  return Posts;
};
