/*
  The code herein (in this project, not just this file) is in large part [influenced and/or adaptations of and/or copies of] the code in Marijn Haverbeke's `heckle` -- whose source is at https://github.com/marijnh/heckle
*/

const renderPosts = require('./renderPosts');
const readFiles = require('./readFiles');
const clean = require('./clean');
const generate = require('./generate');

// Change `BLOG_DIR` and `BUILD_DIR` to suit needs.
const BLOG_DIR = './test';
const BUILD_DIR = './build';

function build() {
  const posts = readFiles(BLOG_DIR);
  const Posts = renderPosts(posts);
  clean(BUILD_DIR);
  generate(BUILD_DIR, Posts);
}

build();
