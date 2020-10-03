const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => { 
    config.resolve.alias
    .set('@pages', resolve('./src/pages'))
    .set('@scripts', resolve('./src/assets/scripts'))
    .set('@styles', resolve('./src/assets/styles'))
    .set('@components', resolve('./src/components'))
    .set('@models', resolve('./src/models'))
    .set('@utils', resolve('./src/utils'))
  }
}