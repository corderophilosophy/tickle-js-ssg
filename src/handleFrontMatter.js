const convertStrToObj = require('./stringToObj');

module.exports = function frontMatter(data) {
  if (/^---\n/.test(data)) {
    var end = data.search(/\n---\n/);
    if (end !== -1) {
      return {
        frontMatter: convertStrToObj(data.slice(4, end + 1)) || {},
        main: data.slice(end + 5)
      };
    }
  }
  return { frontMatter: null, main: data };
};
