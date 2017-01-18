const fs = require('fs-extra');
const handleFrontMatter = require('./handleFrontMatter');

module.exports = function parser(file) {
  // read the file to parse
  const data = fs.readFileSync(`${file}`, 'utf8');
  return handleFrontMatter(data);
};
