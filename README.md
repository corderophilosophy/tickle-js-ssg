# This is `Tickle` 😂

## Actual Truth (I think...):
I don't *really* know what a static site generator is (I'm actually not sure if that's true, but let's roll with it). Is this what it is, sort of?

## I did this why, now?
I've used Jekyll a tiny, little, bit before and liked it a lot. But I didn't like not knowing what was going on underneath. I don't speak Ruby.

So it was either learn Ruby or write something in JavaScript (something about Ruby syntax bothers me -- I have no idea what or why). So I did some looking and reading and came across Marijn Haverbeke's [heckle](https://github.com/marijnh/heckle), a Jekyll clone written in JavaScript (Marijn Haverbeke is amazing).

✨ Jackpot! ✨

Tickle is heckle adapted (*read: simplified*) for my own needs. It's also not *nearly* ready for actual use. Happily welcoming contribs 😄

Basically, you point tickle to a directory of markdown files and a template for those files, and it renders ther markdown as html, spitting things out into a `build` folder. And it does it chuckling the entire time! 😆


## Usage:
Install with `npm`: `npm install -D tickle-js-ssg`
Then
```javascript
'use strict';
const Tickle = require('tickle-js-ssg');

const config = require('path/to/your/_config.json')
// By default, Tickle looks for your a confiuration file in your project root called `_config.json`.

function generate() {
  Tickle(config);
};

generate(); // run generate() to :rocket:
```

Sample `_config.json` file with the following keys -- insert your own values:
```json
{
  "site_url": "",
  "base_path": "./build/blog/posts",
  "output": "./src/blog/posts"
}
```
NB: At the moment, `site_url` is not used.

## WIP:
📆  I'll be adding support for, among other things, partials (at some point) and automatic generation of an index of posts, based on a given a template.
