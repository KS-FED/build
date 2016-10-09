export default function (Vue,router){
    router.map({

    '/':{
        router_type:'root',
        component: function(resolve){
            require(['./views/app.vue'],resolve)
        },
        subRoutes:{

            // 会员主页
            '/home':{
                name:'home',
                title:'主页',
                component: function(resolve){
                    require(['./views/home/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab导航（边框）
            '/tab-bor':{
                name:'tab-bor',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bor.vue'], (res)=> {
                        resolve(res)
                    })
                }
            }

        }
    }

    })


    router.beforeEach(transition =>{
        console.log(transition)
        transition.next()
    })
}