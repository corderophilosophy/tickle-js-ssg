'use strict';
const fs = require('fs');
const p = require('path');

module.exports = function buildIndex(blogDirectory, config) {
  const { posts } = blogDirectory.blog;
  let index = '<div class="blog-index">\n<ul>\n';
  Object.keys(posts).map((post, idx) => {
    const thisPost = posts[post];
    let postName = thisPost.name.replace(/(\.\w+)$/, '.html');
    index += `
    <li class='blog-item-${idx}'>
      <a href="${config.site_url}/blog/posts/${postName}">
        ${thisPost.frontMatter.title}
      </a>
    </li>\n`;
  });
  index += '</ul>\n</div>\n';
  fs.writeFileSync(p.join(config.output, 'blog/postIndex.html'), index, 'utf8');
};
/*
  posts[el].name.replace('.md', '.html');
*/
