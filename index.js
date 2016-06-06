// ------------------------------------
// #METALSMITH - POSTHTML
// ------------------------------------

'use strict'

const posthtmlrc = require('posthtml-load-config')

function posthtml (options) {
  return function (files, metalsmith, done) {
    posthtmlrc()
      .then(({ plugins, options }) => {
        Object.keys(files).forEach((file) => {
          let html = files[file].contents.toString()

          require('posthtml')(plugins)
            .process(html, options)
            .then((result) => {
              files[file].contents = new Buffer(result.html)
              done()
            })
        })
      })
  }
}

module.exports = posthtml
