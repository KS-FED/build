import api from '../../model/api/index.js'
/**
 * Service:['session','Promise']
 */

/**
 * {'common.getList':{url:'./url',method:'get'}
 *     => {'/url':'common.getList'}
 * @param  {[type]} res    [description]
 * @return {[type]}        [description]
 */
function getUrlMap(data){
    return Object.keys(data)
            .reduce(function(res,key){
                var item = data[key]
                if(item.cache){
                    // console.log(item)
                    res[item.url] = key
                }
                return res
            },{})
}
var caches = getUrlMap(api)


export default function install(Vue){


    /**
     * [overrideXHRPromise 重写xhrpromise]
     * @param  {[Function]} method  [请求方法]
     * @param  {[Array]}    args    [请求参数]
     * @param  {[Object]}   context [执行环境]
     * @return {[Object]}           [伪promise]
     */
    function overrideXHRPromise(method, args, context, url){


        var cache = cachePromise(url),
            xhrPromise = cache.val ? cache.promise  : method.apply(context,args),
            promise = {
                then(resolvecb,rejectcb){
                    
                    xhrPromise.then((res)=>{
                            var body = res.body
                            if(body.code == 10000){
                                cache.val || Service.session.set(cache.key,res)
                                resolvecb && resolvecb(body)
                            }else{
                                Service.KsMessage.danger(body.message)
                            }
                          
                        },(res)=>{
                            Service.KsMessage.danger('连不上服务，请稍后再试！')
                        })
                }
            }
            
        return promise
    }

    function cachePromise(url){
        var cache = {
            key:caches[url],
            val:null,
            promise:null,

        }

        if(cache.key && (cache.val = Service.session.get(cache.key))){
            cache.promise = new Service.Promise(function(resolve,reject){
                // console.log(cache.val)
                resolve(cache.val)
            })
        }
        return cache
    }

    // 重写 Vue.http[method]
    var http = Vue.http
    ;['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach((type)=>{
        var method = http[type]
        http[type] = (...args)=> {
            // console.log(args)
            return overrideXHRPromise(method, args, http, args[0])
        }
    })

    // 重写 Vue.resource(url)[method]
    var resource = Vue.resource
    Vue.resource = function(...args){
        var url = args[0]
        var pending = resource.apply(null,args)
        // console.log('pending: ',pending)
        ;['get' ,'save' ,'query' ,'update' ,'remove' ,'delete'].forEach((key)=>{
            var method = pending[key]
            pending[key] = (...args)=> {
                // console.log(args)
                return overrideXHRPromise(method, args, null, url)
            }
        })
        return pending
    }
    
}