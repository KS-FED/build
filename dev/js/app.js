import VueRouter from 'vue-router'
import config from './config/index'
import components from './components/index'
import routers from './routers'
import interceptor from './middlewares/interceptor'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(interceptor)
Vue.use(config)

Object.keys(components).forEach(k => Vue.component(k, components[k]))


// *** 实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})
routers(Vue, router)

let app = Vue.extend({})
router.start(app,'#app')

// Vue.http.get('./aaa', {})
//     .then(res => {
//         console.log('')
//     })




