export default function install(Vue,map,global) {

        
        var _init = Vue.prototype._init
        Vue.prototype._init = function(options = {}) {
            options.init = options.init ? [modelInit].concat(options.init) : modelInit
                // console.log(modelInit)
            _init.call(this, options)
        }

        function modelInit() {
            global = {
                restful: global.restful || false ,
                payload: global.payload || false ,
                abort :  global.abort || false
            }
            /**
             * 获取 vuem 依赖的方法,从map容器中获取属性赋值给 vm.$m
             * 1. 遍历 vuem ,获取依赖属性 
             *     两种情况，有层级或无层级(common.getList || getList)
             *     用目标检测法是否有
             *     ['get','post','delete','query','remove','save','update'] 
             *     中的属性,并且值为字符串
             * 2. 错误提示
             * 3. 造值$m后赋值
             */
            //  locals 暂时放入service中
            var locals = ['local','session','cookie']

            // console.log(this.$options.vuem)
            if (this.$options.vuem) {
                this.$m = {}
                this.$options.vuem
                    .forEach((item) => {
                        // console.log(item)
                        // common.getList => ['common','getList']
                        var keys = item.split('.')
                        if(~locals.indexOf(keys[0]) && keys.length == 1){
                            local.apply(this, [map, keys])
                        }else{
                            remote.apply(this, [map, keys])    
                        }
                        
                    })        
            }
        }

        /**
         * [local 处理本地存储]
         * @param  {[type]} map  [地图]
         * @param  {[type]} keys [description]
         * @return {[type]}      [description]
         */
        function local(map, keys){
            var key = keys[0]
            this.$m[key] = map[key]
        }

        /**
         * [remote 处理远程数据]
         * @param  {[type]} map     [description]
         * @param  {[type]} keys    [description]
         * @return {[type]}         [description]
         */
        function remote(map,keys){
            
            var xhrfig = verify(map, keys.join('.'))
            // return
            // console.log('xhrfig',xhrfig)
            if(!xhrfig) return

            keys.reduce((pending, k, i)=>{
                
                if(i == keys.length-1) {
                    pending[k] = (...args) => getXhrPromise.call(this,xhrfig,keys,args)
                }else{
                    pending[k] = pending[k] || {}
                }
                
                return pending[k]
            },this.$m)
        
        }

        /**
         * [getXhrPromise 返回请求的Promise对象]
         * @param  {[type]} xhrfig   [XHR 配置]
         * @param  {[type]} keys []
         * @param  {[type]} args [具体调用接口方法传如的参数]
         * @return {[type]}      [promise]
         */
        function getXhrPromise(xhrfig,keys,args){
            // console.log(xhrfig,keys)

            var restful = typeof xhrfig.restful =='boolean' ? xhrfig.restful : global.restful
            var payload = typeof xhrfig.payload =='boolean' ? xhrfig.payload : global.payload
            var abort   = typeof xhrfig.abort =='boolean' ? xhrfig.abort : global.abort

            var requestOptions = {
                emulateJSON : !payload ,
                vuem : abort ? keys.join('.') : ''
            }                
            // console.log(restful)
            if(restful){
                // console.log(xhrfig.method)
                return this.$resource(xhrfig.url, {}, {}, requestOptions)[xhrfig.method].apply(null, args)    
            }else{
                args.unshift(xhrfig.url)

                if(~['post', 'put', 'patch'].indexOf(xhrfig.method)){
                    args[2] = Service.merge(args[2]||{}, requestOptions)
                }else{
                    args[1] = Service.merge(args[1]||{}, requestOptions)
                }
                

                return this.$http[xhrfig.method].apply(null, args)
            }
        
        }
        
        /**
         * [verify 验证调用属性在IOC中是否存在]
         * @param  {[type]} map       [映射map]
         * @param  {[type]} dependent [依赖属性]
         * @return {[type]}           [description]
         */
        function verify(map, dependent){
            var target = map[dependent]
            if(!target) {
                Service.logger('warn',`接口模块 '${dependent}' 未定义`)
                return null
            }
            return target
            
        }
        
}