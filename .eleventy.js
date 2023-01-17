const minifyHtml = require("./utils/minify-html");
const imageShortcode = require("./src/shortcodes/image");

module.exports = (config) => {
  config.addAsyncShortcode("image", imageShortcode);
  config.addTransform("htmlmin", minifyHtml);
  config.addPassthroughCopy({ "src/assets/fonts": "fonts" });
  config.addLayoutAlias("default", "layouts/default.html");
  config.addLayoutAlias("blog", "layouts/blog.html");

  return {
    dir: {
      input: "src/site",
      data: "_data",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
