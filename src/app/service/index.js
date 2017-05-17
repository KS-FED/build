import intersection from './util/intersection.js'
import vuei from './vuei'
import storage from './storage'

// console.log('service: ',Object.keys(Vue),Object.keys(Vue.util))
// console.log(Vue.util.on)
// console.log(Object.keys(VueResource),VueResource)
// console.log('service index')
// console.log(storage)

var service = {
    name:'欢迎应用 service 服务',
    Promise:Vue.Promise,
    // util:Vue.util,
    merge:Vue.util.mergeOptions,
    intersection:intersection,
    local:storage.local,
    session:storage.session,
    cookie:storage.cookie,
    urlTpl:Vue.url
}

Vue.use(vuei,service)

module.exports = service
// export default service