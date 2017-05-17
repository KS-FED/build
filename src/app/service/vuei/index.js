export default function install(Vue,service) {
        
        var _init = Vue.prototype._init
        Vue.prototype._init = function(options = {}) {
            options.init = options.init 
                            ? [init].concat(options.init) 
                            : init
                // console.log(init)
            _init.call(this, options)
        }

        function init() {
            /**
             */
            if (this.$options.vuei) {
                this.$i = {}
                this.$options.vuei
                    .forEach((key) => {
                        // console.log(key)
                        if(service[key]){
                            this.$i[key] = service[key]
                        }else{
                            console.error(`IOC容器中不存在${key}属性`)
                        }
                        
                                              
                    })

            }


        }


}