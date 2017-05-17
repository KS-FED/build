import config from './config'
// import service from './service'
import model from './model'
import components from './view/components'
import directives from './view/directives'
import router from './router'
// import interceptor from './middlewares/interceptor'

// console.log('app index')
// console.log(service)

Vue.use(config)
// Vue.use(interceptor)
Vue.use(components)
Vue.use(directives)

// console.log(model);
// Vue.use(model)

let app = Vue.extend({
    store:model
})
service.router = router(Vue)
service.router.start(app,'#app')

console.log(service)
