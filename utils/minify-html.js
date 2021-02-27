const htmlMinifier = require('html-minifier')

module.exports = (content, outputPath) => {
  if (outputPath.endsWith('.html')) {
    return htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    })
  }
}
