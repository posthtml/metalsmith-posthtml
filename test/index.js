'use strict'

const test = require('ava')

const posthtml = require('../')
const metalsmith = require('metalsmith')

test('metalsmith-posthtml', (t) => {
  const plugins = [ require('posthtml-bem')() ]
  const options = {}

  metalsmith(__dirname)
    .source('./fixtures')
    .destination('./expect')
    .use(posthtml(plugins, options))
    .build((err) => {
      if (err) throw err
    })
})
