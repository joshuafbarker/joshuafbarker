const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
  // Css Minifier filter
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // config props
  return {
    dir: {
      input: "src",
      layouts: "_layouts",
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
  };
};
