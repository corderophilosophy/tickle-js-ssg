'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function build(site, config) {
  const { blog, _includes, _templates } = site;
  let rest = Object.assign({}, site);
  delete(rest.blog);
  delete(rest._includes);
  delete(rest._templates);
  fs.ensureDirSync(config.output);
  for (let post in blog) {
    const thisPost = blog[post];
    const {title, template} = thisPost.frontMatter;
    const thisTemplate = _templates[template];
    let t = thisTemplate;
    t = t.replace('{{title}}', title);
    t = t.replace('{{content}}', thisPost.main);
    for (let include in _includes) {
      t = t.replace('{{>'+ include +'}}', _includes[include]);
    }
    fs.ensureDirSync(p.join(config.output, 'blog/posts'));
    fs.writeFileSync(p.join(config.output, 'blog/posts/', post + '.html'), t, 'utf8')
  }
  for (let path in rest) {
    for (let dir in rest[path]) {
      const destination = rest[path][dir].replace('_site', 'public_html');
      fs.copySync(rest[path][dir], destination);
    }
  }
};
