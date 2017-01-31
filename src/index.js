'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const getPaths = require('./getPaths');
const clean = require('./clean');
const generate = require('./generate');
const build = require('./build');
const buildIndex = require('./buildIndex');

function Tickle(config) {
  if (config.clean_dist === true) {
    clean(config.output);
  }
  const _site = getPaths(config.base_path);
  const Site = generate(_site);
  build(Site, config);
  if (config.build_index === true) {
    buildIndex(Site, config)
  }
}

// module.exports = Tickle;
Tickle(require('../_config.json'));
