'use strict';
// expects a string of associated key: "value" pairs, separated by \n
module.exports = function convertStrToObj(string) {
  if (typeof string !== 'string') {
    throw new Error('convertStrToObj must be passed a string');
  }
  const intermediateArray = string.trim().split('\n');
  const array = intermediateArray.map(function(element) {
    return element.split(':');
  });
  if (!array || !array.forEach) {
    throw new Error('something went wrong with array')
  }
  const Object = {};
  array.forEach(function(item) {
    Object[item[0]] = item[1].replace(/\s"|"$/g, '');
  });
  return Object;
};
