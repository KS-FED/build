import config from './config'
import serviceInstall from './service/install.js'
import model from './model'
import components from './view/components'
import directives from './view/directives'
import router from './router'



Vue.use(config)
Vue.use(components)
Vue.use(directives)


let app = Vue.extend({
    store:model
})
Service.router = router(Vue)
Service.router.start(app,'#app')


