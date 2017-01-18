const fs = require('fs-extra');

module.exports = function generate(destDir, posts) {
  fs.ensureDirSync(destDir + '/posts/', 0755);
  posts.forEach((post) => {
    let dest = destDir + '/posts/' + post.name + '.html';
    let data = post.main;
    fs.writeFileSync(dest, data, 'utf8');
  });
}
