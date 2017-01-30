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

Currently, `Tickle` expects your project directory to contain the following:
```
_site
├── blog
│   └── posts
├── _includes
└── _templates
```
Posts will be generated based on the template specified in the post's frontmatter.

### _includes

Partials can be placed in your `_includes` folder. Then, e.g. `header.html`, can be injected in your templates with `{{>header}}`.

```
/* _includes/header.html*/
<header>
  <h1>Site Header 😆</h1>
</header>
```

```
/* _templates/default.html */

<!DOCTYPE html>
<html>
  ...
  <body>
    {{>header}}
    ...
</html>

```

### blog/posts/

Posts should follow (what I take is fairly) standard naming convention:

  `yyyy-mm-dd-blogpost.(md|markdown|html)`

Posts should begin with the following frontmatter:
```
---
title: "YourPostTitle"
template: "NameOfYourTemplate"
---

/* Begin post here */
```

## Installation

Install with `npm`: `npm install -D tickle-js-ssg`
Then in your project `root`, you'd have a `build` file where you run:
```javascript
'use strict';
const Tickle = require('tickle-js-ssg');

const config = require('path/to/your/_config.json')
// By default, Tickle looks for your a configuration file in your project root called `_config.json`.

function generate() {
  Tickle(config);
};

generate(); // run generate() to :rocket:
```

Your `_config.json` ought to look like this:
```json
{
  "site_url": "",
  "base_path": "./_site",
  "output": "./public_html"
}
```
NB: At the moment, `site_url` is not used.

## WIP:
📆  I'll be adding support for, among other things, ✓ partials and automatic generation of an index of posts, based on a given a template.
