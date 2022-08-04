module.exports = (eleventyConfig) => {
  // pass css file
  eleventyConfig.addPassthroughCopy("./src/style.css");

  return {
    dir: {
      input: "src",
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
  };
};
