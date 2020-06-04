module.exports = {
    plugins: [
        require('postcss-import')({ path: ['./lib'] }),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('postcss-nested'),
    ]
  }
  