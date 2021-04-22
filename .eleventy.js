module.exports = function(eleventyConfig) {
  
  // Watch targets
  eleventyConfig.addWatchTarget('./src/assets/');
  eleventyConfig.addWatchTarget('./tailwind.config.js');

  // Passthrough Copy
  eleventyConfig.addPassthroughCopy('src/assets/images/');

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  return {
    dir: {
      input: 'src',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
  }

};
