module.exports = {
  plugins: [
    require('postcss-sort-media-queries')({
      // sort: 'mobile-first' default value
      sort: function (a, b) {
        // custom sorting function

      }
    }),
    require('autoprefixer')
  ]
}