var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var webpackConfig = require('../webpack.config')
var shell = require('shelljs')



var config = merge.smart(webpackConfig, {
    watch: true
})


webpack(config, function (err, status) {
  if (err) throw err
  process.stdout.write(status.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')

    shell.cd('./dist')
    shell.exec('proxy-mock -p 8079', {async:true}).stdout.on('data', function(data) {})
})
