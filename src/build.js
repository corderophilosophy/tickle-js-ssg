'use strict';
const fs = require('fs-extra');
const p = require('path');

module.exports = function build(site, config) {
  const { blog, _includes, _templates } = site;
  let rest = Object.assign({}, site);
  delete rest.blog;
  delete rest._includes;
  delete rest._templates;
  fs.ensureDirSync(config.output);
  for (let item in blog) {
    if (item == 'posts') {
      Object.keys(blog[item]).map((el, index) => {
        const thisPost = blog[item][el];
        const { title, template } = thisPost.frontMatter;
        const thisTemplate = _templates[template];
        let t = thisTemplate;
        t = t.replace('{{title}}', title);
        t = t.replace('{{content}}', thisPost.main);
        for (let include in _includes) {
          t = t.replace('{{>' + include + '}}', _includes[include]);
        }
        fs.ensureDirSync(p.join(config.output, 'blog/posts'));
        fs.writeFileSync(
          p.join(config.output, 'blog/posts/', p.basename(thisPost.name) + '.html'),
          t,
          'utf8'
        );
      });
    }
    else {
      let src = blog[item], dest = blog[item].replace('_site', 'public_html');
      fs.copySync(src, dest);
    }
  }
  for (let path in rest) {
    for (let dir in rest[path]) {
      const destination = rest[path][dir].replace('_site', 'public_html');
      fs.copySync(rest[path][dir], destination);
    }
  }
};
