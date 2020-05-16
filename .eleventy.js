module.exports = (config) => {
  config.addLayoutAlias('default', 'layouts/default.html')

  config.addPassthroughCopy('./src/site/scripts')
  config.addPassthroughCopy('./src/site/styles')

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
