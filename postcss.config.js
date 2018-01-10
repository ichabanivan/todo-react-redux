module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 16, // (Number) The root element font size.
      unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
      propWhiteList: [], // (Array) The properties that can change from px to rem.
      selectorBlackList: ['html'], // (Array) The selectors to ignore and leave as px.
      replace: true, // (Boolean) replaces rules containing rems instead of adding fallbacks.
      mediaQuery: true, // false // (Boolean) Allow px to be converted in media queries.
      minPixelValue: 4 // (Number) Set the minimum pixel value to replace.
    },
    'postcss-cssnext': {
      browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
    },
    'postcss-short': {},
    'postcss-sorting': {},
    'postcss-flexbugs-fixes': {},
    'css-mqpacker': {}
  }
};