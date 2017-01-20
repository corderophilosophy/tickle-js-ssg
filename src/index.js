'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./readFiles');
const clean = require('./clean');
const generate = require('./generate');

const Config = require('../_config.json');

function Tickle(config = Config) {
  const posts = readFiles(config.blog_dir);
  const Posts = renderPosts(posts, config.post_template);
  clean(config.build_dir);
  generate(config.build_dir, Posts);
}

// module.exports = Tickle;
Tickle(Config);
