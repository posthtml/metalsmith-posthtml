/**
 *@module metalsmith-posthtml
 *@author Michael Ciniawsky (@michael-ciniawsky)
 *@version 1.0.0
 *
 * @requires posthtml
 * @method posthtml
 * @param plugins {Array}  PostHTML plugins
 * @param options {Object} PostHTML options
 *
 * @returns {Buffer} html
 */
module.exports = function posthtml (plugins, options) {
  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      let html = files[file].contents.toString()

      require('posthtml')(plugins)
        .process(html, options)
        .then((result) => {
          files[file].contents = new Buffer(result.html)

          done()
        })
    })
  }
}
