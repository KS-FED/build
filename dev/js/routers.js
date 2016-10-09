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
            },

            // tab导航（背景）
            '/tab-bg':{
                name:'tab-bg',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bg.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // table（隔行添加背景色）
            '/table-striped':{
                name:'table-striped',
                title:'table',
                component: function(resolve){
                    require(['./views/table/table-striped.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 分页
            '/paging':{
                name:'paging',
                title:'paging',
                component: function(resolve){
                    require(['./views/paging/paging.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 提示框
            '/toast':{
                name:'toast',
                title:'提示框',
                component: function(resolve){
                    require(['./views/toast/toast.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

        }
    }

    })


    router.beforeEach(transition =>{
        console.log(transition)
        transition.next()
    })
}