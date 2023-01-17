const Image = require("@11ty/eleventy-img");

module.exports = async (src, loading, alt, sizes = "70vw") => {
  const metadata = await Image(src, {
    widths: [300, 600, 800],
    formats: ["avif", "webp", "jpg"],
    outputDir: "./_site/img/",
  });

  const attributes = {
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  return Image.generateHTML(metadata, attributes);
};
