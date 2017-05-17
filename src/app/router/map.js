export default {

    '/':{
        name:'root',
        component: function(resolve){
            require(['../view/pages/app.vue'],resolve)
        },
        subRoutes:{

            // 会员主页
            '/home':{
                name:'home',
                title:'主页',
                component: function(resolve){
                    require(['../view/pages/home/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },
            // tree
            '/tree':{
                name:'tree',
                title:'树',
                component: function(resolve){
                    require(['../view/pages/tree/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            }

        }
    }

}