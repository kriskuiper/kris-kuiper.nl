const minifyHtml = require('./utils/minify-html')

module.exports = (config) => {
  config.addTransform('htmlmin', minifyHtml)
  config.addPassthroughCopy({ 'src/assets/fonts': 'fonts' })
  config.addLayoutAlias('default', 'layouts/default.html')

  return {
    dir: {
      input: "src/site",
      data: "_data",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  }
}
