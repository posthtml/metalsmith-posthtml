module.exports = {
  sync: false,
  plugins: {
    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '-'
    }
  }
}
