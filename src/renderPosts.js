const fs = require('fs-extra');

module.exports = function renderPosts(posts) {
  const template = fs.readFileSync('./src/templates/post.html', 'utf8').toString();
  const Posts = posts.map((post) => {
    let t = template;
    t = t.replace('{{title}}', post.frontMatter.title);
    t = t.replace('{{content}}', post.main);
    let p = Object.assign(post, {main: t});
    return p;
  })
  return Posts;
};
