import VueRouter from 'vue-router'
import routerMap from './map.js'

export default function (Vue){
    Vue.use(VueRouter)
    // *** 实例化VueRouter
    let router = new VueRouter({
        hashbang: true,
        history: false,
        saveScrollPosition: true,
        transitionOnLoad: true
    })
    router.map(routerMap)


    router.beforeEach(transition =>{
        if(transition.to.name == 'root') {
            router.go({ name: 'home'})
        }
        transition.next()
    })

    
    return router
    
}