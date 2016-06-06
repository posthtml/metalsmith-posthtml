[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]


<div align="center">
  <img width="220" heigth="125" title="Metalsmith" src="https://avatars0.githubusercontent.com/u/16531417?v=3&s=200">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
</div>

# Metalsmith PostHTML

## Install

```bash
(sudo) npm i -D metalsmith-posthtml
```

## Usage

PostHTML Setup via [posthtml-load-config][load-config]

[load-config]: https://github.com/posthtml/posthtml-load-config

```js
'use strict'

const metalsmith = require('metalsmith')

const posthtml = require('metalsmith-posthtml')

metalsmith(__dirname)
    .source('./src')
    .destination('./dest')
    .use(posthtml())
    .build((err) => {
      if (err) throw err
    })
```

## LICENSE [![License MIT][license]][license-url]

> MIT License (MIT)

> Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/metalsmith-posthtml.svg
[npm-url]: https://npmjs.com/package/metalsmith-posthtml

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/metalsmith-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/metalsmith-posthtml

[devdeps]: https://david-dm.org/posthtml/metalsmith-posthtml/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/metalsmith-posthtml#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/metalsmith-posthtml.svg
[travis-url]: https://travis-ci.org/posthtml/metalsmith-posthtml

[travis-rel-v1.0.0]: https://travis-ci.org/posthtml/metalsmith-posthtml.svg?branch=release/v1.0.0
[travis-rel-url-v1.0.0]: https://travis-ci.org/posthtml/metalsmith-posthtml?branch=release/v1.0.0

[travis-dev]: http://img.shields.io/travis/posthtml/metalsmith-posthtml.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/metalsmith-posthtml?branch=develop

[cover]: https://coveralls.io/repos/github/posthtml/metalsmith-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/metalsmith-posthtml?branch=master

[cover-rel-v1.0.0]: https://coveralls.io/repos/github/posthtml/metalsmith-posthtml/badge.svg?branch=release/v1.0.0
[cover-rel-url-v1.0.0]: https://coveralls.io/github/posthtml/metalsmith-posthtml?branch=release/v1.0.0

[cover-dev]: https://coveralls.io/repos/github/posthtml/metalsmith-posthtml/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/metalsmith-posthtml?branch=develop

[license]: https://img.shields.io/github/license/posthtml/metalsmith-posthtml.svg
[license-url]: https://raw.githubusercontent.com/posthtml/posthtml/metalsmith-posthtml/LICENSE
