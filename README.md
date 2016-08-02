[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# Metalsmith PostHTML <img width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -D metalsmith-posthtml
```

## Usage

```js
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

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/metalsmith-posthtml.svg
[npm-url]: https://npmjs.com/package/metalsmith-posthtml

[deps]: https://david-dm.org/posthtml/metalsmith-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/metalsmith-posthtml

[build]: http://img.shields.io/travis/posthtml/metalsmith-posthtml.svg
[build-url]: https://travis-ci.org/posthtml/metalsmith-posthtml

[cover]: https://coveralls.io/repos/github/posthtml/metalsmith-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/metalsmith-posthtml?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
