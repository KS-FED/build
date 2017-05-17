// 非模板依赖注入
// app.inject = ['merge']
// function app(merge){
//     merge(a,b)
// }

// import service from '../../service'
export default function install(Vue,api,options) {
        
        var _init = Vue.prototype._init
        Vue.prototype._init = function(options = {}) {
            options.init = options.init ? [modelInit].concat(options.init) : modelInit
                // console.log(modelInit)
            _init.call(this, options)
        }

        function modelInit() {
            /**
             * 获取 vuem 依赖的方法,从API容器中获取属性赋值给 vm.$m
             * 1. 遍历 vuem ,获取依赖属性 
             *     两种情况，有层级或无层级(common.getSSQ || getList)
             *     用目标检测法是否有
             *     ['get','post','delete','query','remove','save','update'] 
             *     中的属性,并且值为字符串
             * 2. 错误提示
             * 3. 造值$m后赋值
             */

            var requestMethods = ['get','post','delete','query','remove','save','update'],
                locals = ['local','session','cookie']

            if (this.$options.vuem) {
                this.$m = {}
                this.$options.vuem
                    .forEach((key) => {

                        var keys = key.split('.')
                        if(~locals.indexOf(keys[0]) && keys.length == 1){
                            local.apply(this, [api, keys])
                        }else{
                            remote.apply(this, [api, keys, requestMethods])    
                        }
                        
                    })        
            }
        }

        /**
         * [local 处理本地存储]
         * @param  {[type]} api  [description]
         * @param  {[type]} keys [description]
         * @return {[type]}      [description]
         */
        function local(api, keys){
            var key = keys[0]
            this.$m[key] = api[key]
        }

        /**
         * [remote 处理远程数据]
         * @param  {[type]} api     [description]
         * @param  {[type]} keys    [description]
         * @param  {[type]} methods [description]
         * @return {[type]}         [description]
         */
        function remote(api,keys,methods){
            var MU = verify(api, keys, methods)
            // console.log('MU',keys.join('.'),MU)
            if(!MU) return
            var val = keys.reduce((pending, k, i)=>{
                
                if(i == keys.length-1) {
                    pending[k] = (...args)=>{
                        
                        var restful = typeof MU.restful == 'boolean' 
                                        ? MU.restful
                                        : options.restful || false 

                        var payload = typeof MU.payload == 'boolean' 
                                        ? MU.payload
                                        : options.payload || false
                        
                        var abort   = typeof MU.abort == 'boolean' 
                                        ? MU.abort
                                        : options.abort || true

                        var requestOptions = {
                            emulateJSON : !payload ,
                            vuem : abort ? keys.join('.') : ''
                        }                
                        
                        if(restful){
                            return this.$resource(MU.url, {}, {}, requestOptions)[MU.method].apply(null, args)    

                        }else{

                            args.unshift(MU.url)

                            if(~['post', 'put', 'patch'].indexOf(MU.method)){
                                args[2] = service.merge(args[2]||{}, requestOptions)
                            }else{
                                args[1] = service.merge(args[1]||{}, requestOptions)
                            }
                            

                            return this.$http[MU.method].apply(null, args)
                        }
                    }
                }else{
                    pending[k] = pending[k] || {}
                }
                // console.log('k',i,k,pending[k])
                
                return pending[k]
            },this.$m)
        
        }


        
        /**
         * [verify description]
         * @param  {[type]} api       [description]
         * @param  {[type]} dependent [description]
         * @param  {[type]} methods   [description]
         * @return {[type]}           [description]
         */
        function verify(api, dependent, methods){
            var moduleName = dependent[0],
                subName = dependent[1],
                module = api[moduleName]

            // console.log(module,getMU(methods,module))
            var UM = dependent.reduce((pending, key)=>{
                var obj = pending[key],MU
                if(obj && (MU = getMU(obj, methods))){
                    return MU      
                }else{
                    if(!obj) console.warn(`接口模块 '${dependent.join('.')}' 未定义`)
                }
                
                return obj
            },api)
            console.log('UM',UM)
            return UM
            
        }


        function getMU(config, methods){
            var method,url
            
            method = Object.keys(config).filter((val)=>{
                if(~methods.indexOf(val)) return val
            })[0]
            url = config[method]

            if(method){
                config.method = method
                config.url = url
                return config
            }
            
        }
        


}