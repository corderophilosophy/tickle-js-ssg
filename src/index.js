'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./newReadFiles');
const clean = require('./clean');
const generatePosts = require('./generate');

const Config = require('../_config.json');

function Tickle(config = Config) {
  const Site = readFiles(config.base_path);
  clean(config.output);
  generatePosts(Site, config.output);
}

// module.exports = Tickle;
Tickle(Config);
