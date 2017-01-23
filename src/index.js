'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./newReadFiles');
const clean = require('./clean');
const generatePosts = require('./generatePosts');

const Config = require('../_config.json');

function Tickle(config = Config) {
  const SITE = Config.site_url,
  BASEPATH = Config.base_path,
  TEMPLPATH = Config.base_path + config.paths.templates,
  INCLPATH = Config.base_path + config.paths.includes,
  BLOGPATH = Config.base_path + config.paths.blog;
  const posts = readFiles(BASEPATH);
  // const Posts = renderPosts(posts, paths.templates);
  // clean(config.paths.output_dir);
  // generatePosts(config.paths.output_dir, Posts);
}

// module.exports = Tickle;
Tickle(Config);
