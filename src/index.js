'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./newReadFiles');
const clean = require('./clean');
const generate = require('./generate');
const build = require('./build');

const Config = require('../_config.json');

function Tickle(config = Config) {
  const _site = readFiles(config.base_path);
  clean(config.output);
  const Site = generate(_site, config.output);
  build(Site, config);
}

// module.exports = Tickle;
Tickle(Config);
