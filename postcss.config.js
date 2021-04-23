const plugins = {
  tailwindcss: {},
  autoprefixer: {},
}

if (process.env.NODE_ENV === 'production') Object.assign(plugins, { cssnano: {} });

module.exports = { plugins };
