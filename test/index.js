// ------------------------------------
// #METALSMITH - POSTHTML - TEST
// ------------------------------------

'use strict'

const metalsmith = require('metalsmith')
const posthtml = require('../')

metalsmith(__dirname)
    .source('./fixtures')
    .destination('./expect')
    .use(posthtml())
    .build((err) => {
      if (err) throw err
    })
