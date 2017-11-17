var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var webpackConfig = require('../webpack.config')
var shell = require('shelljs')
var opn = require('opn')
var toshell=false;





var config = merge.smart(webpackConfig, {
    watch: true
})


var port = getPort() || 8088

webpack(config, function (err, status) {
  if (err) throw err
  process.stdout.write(status.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    
    if(!toshell){
      shell.cd('dist')
      shell.exec('proxy-mock -p '+port, {async:true}).stdout.on('data', function(data) {
        if(!toshell) opn('http://localhost:'+port)
        toshell=true
      })
      
         
    }

})



/**
 * [getArgv 获取npm run 中的参数]
 * @return {[type]} [description]
 */
function getArgv() {
    var argv
    try {
        argv = JSON.parse(process.env.npm_config_argv).original
    } catch (ex) {
        argv = process.argv
    }
    return argv.slice(2)
}
/**
 * [getPort 获取端口]
 * @return {[]} [undefined || port]
 */
function getPort(){
  var argv = getArgv(),port
  if(argv[0] == '-p') port = argv[1]
  return port
}
