import util from './util'
import storage from './storage'
import logger from './logger'
import widget from './widget'



var Service = {
    name:'欢迎应用 Service 服务',
    logger:logger,
    Promise:Vue.Promise
    
}

Service = util.mergeMulti(Service,util,storage,widget)



module.exports = Service
