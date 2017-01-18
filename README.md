# This is `Tickle` 😂

## Actual Truth (I think...):
I don't *really* know what a static site generator is (I'm actually not sure if that's true, but let's roll with it). Is this what it is, sort of?

## I did this why, now?
I've used Jekyll a tiny, little, bit before and liked it a lot. But I didn't like not knowing what was going on underneath. I don't speak Ruby.

So it was either learn Ruby or write something in JavaScript (something about Ruby syntax bothers me -- I have no idea what or why). So I did some looking and reading and came across Marijn Haverbeke's [heckle](https://github.com/marijnh/heckle), a Jekyll clone written in JavaScript (Marijn Haverbeke is amazing).

✨ Jackpot! ✨

Tickle is heckle adapted (*read: simplified*) for my own needs. It's also not *nearly* ready for actual use. Happily welcoming contribs 😄


## Usage:
Install with `npm`: `npm install -D tickle-js-ssg`
Then
```javascript
'use strict';
const Tickle = require('tickle-js-ssg');
const Options = {
  blog: './src/blog/drafts', // .md, .markdown, .html
  build: './build/blog/posts', // output folder, based on template ⬇️
  template: './src/blog/template/post.html' // template, as per ⬆️
};
// Tickle must be passed an object with three properties:
//    obj.blog, obj.build, obj.template
function generate() {
  Tickle(Options);
};

generate(); // run generate() to :rocket:
```
