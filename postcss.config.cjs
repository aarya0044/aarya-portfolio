// postcss.config.cjs
module.exports = {
  plugins: [
    // Tailwind v4 uses the @tailwindcss/postcss adapter for PostCSS
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
