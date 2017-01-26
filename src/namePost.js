'use strict';

module.exports = function namePost(data) {
  let name = data.match(/^(.+)\.(md|markdown|html)$/);
  if (name) {
    return name[1];
  }
  return data;
}
