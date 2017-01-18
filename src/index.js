'use strict';
/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./readFiles');
const clean = require('./clean');
const generate = require('./generate');

//  call `build` with an `options` object with three properties:
//    blog, build, and template

const Options = { blog: './_posts', build: './build', template: './src/templates/post.html' };

function Tickle(options = Options) {
  const posts = readFiles(options.blog);
  const Posts = renderPosts(posts, options.template);
  clean(options.build);
  generate(options.build, Posts);
}

module.exports = Tickle;
