// ------------------------------------
// #METALSMITH - POSTHTML
// ------------------------------------

'use strict'

function posthtml (options) {
  return function (files, metalsmith, done) {
    setImmediate(done)

    Object.keys(files).forEach(function (file) {
      let data = files[file]

      require('posthtml-load-config')()
      .then(({ plugins, options }) => {
        require('posthtml')(plugins)
          .process(data, options)
          .then((result) => done(result.html))
      })
    }
  }
}

module.exports = posthtml
