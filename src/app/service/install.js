import vuei from './plugin/vuei.js'
import httpaop from './plugin/httpaop.js'
import interceptor from './plugin/interceptor.js'

if(!Vue) {console.error('please install Vue')}
    
Vue.use(httpaop)
Vue.use(interceptor)
Vue.use(vuei)