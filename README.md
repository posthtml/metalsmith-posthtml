[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <img width="200" heigth="100" title="Metalsmith" src="https://avatars0.githubusercontent.com/u/16531417?v=3&s=200">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Metalsmith PostHTML</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D metalsmith-posthtml
```

<h2 align="center">Usage</h2>

```js
'use strict'

import metalsmith from 'metalsmith'
import posthtml from 'metalsmith-posthtml'

const plugins = [/* Plugins */]
const options = {/* Options */}

metalsmith(__dirname)
    .source('src')
    .destination('dest')
    .use(posthtml(plugins, options))
    .build((err) => {
      if (err) throw err
    })
```

#### [Autoload Config][load-config]

[load-config]: https://github.com/posthtml/posthtml-load-config

```json
{
  "devDependencies": {
    "metalsmith": "^2.1.0",
    "metalsmith-posthtml": "^1.0.0",
    "posthtml-plugin": "^1.0.0",
    "posthtml-plugin": "^1.0.0",
  },
  "posthtml": {
    "sync": false,
    "plugins": {
      "posthtml-plugin": {},
      "posthtml-plugin": {}
    }
  }
}
```

```js
'use strict'

import metalsmith from 'metalsmith'
import posthtml from 'metalsmith-posthtml'

metalsmith(__dirname)
    .source('src')
    .destination('dest')
    .use(posthtml())
    .build((err) => {
      if (err) throw err
    })
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) 2016 PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>

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

[deps]: https://david-dm.org/posthtml/metalsmith-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/metalsmith-posthtml

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/metalsmith-posthtml.svg
[travis-url]: https://travis-ci.org/posthtml/metalsmith-posthtml

[cover]: https://coveralls.io/repos/github/posthtml/metalsmith-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/metalsmith-posthtml?branch=master
