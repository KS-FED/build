// import service from '../service'
import api from './api/index.js'
import httpaop from './httpaop'
import interceptor from './httpaop/interceptor.js'
import vuex from './vuex'
import vuem from './vuem'
import storage from './storage'


if(!Vue) {console.error('please install Vue')}

console.log('model: ',api)

// console.log('storage: ',service.util.mergeOptions(api,storage))
// console.log(Object.keys(Vue.resource),Vue.resource)

Vue.use(vuem, service.merge(api,storage), {restful:true,payload:true})
Vue.use(httpaop)
Vue.use(interceptor)

// console.log(httpaop)
export default vuex(Vue)

