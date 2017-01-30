'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const getPaths = require('./getPaths');
const clean = require('./clean');
const generate = require('./generate');
const build = require('./build');

function Tickle(config) {
  clean(config.output);
  const _site = getPaths(config.base_path);
  const Site = generate(_site);
  build(Site, config);
  console.log(Site);
}

// module.exports = Tickle;
Tickle(require('../_config.json'));
