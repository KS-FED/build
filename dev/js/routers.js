export default function (Vue,router){
    router.map({

    '/':{
        name:'root',
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
            // tree
            '/tree':{
                name:'tree',
                title:'树',
                component: function(resolve){
                    require(['./views/tree/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            }

        }
    }

    })


    router.beforeEach(transition =>{
        if(transition.to.name == 'root') {
            router.go({ name: 'home'})
        }
        transition.next()
    })
    
}