// import service from '../../service'


export default function install(Vue){

    // console.log(Object.keys(Vue.resource('')))
    // console.log(service.urlTpl)
    /**
     * [overrideXHRPromise 重写xhrpromise]
     * @param  {[Function]} method  [请求方法]
     * @param  {[Array]}    args    [请求参数]
     * @param  {[Object]}   context [执行环境]
     * @return {[Object]}           [伪promise]
     */
    function overrideXHRPromise(method, args, context, url){
        
        var promise = {
            then(resolvecb,rejectcb){

                // var res = service.session.get(url)
                // if(res){
                //     resolvecb && resolvecb(res)
                //     return 
                // }

                method.apply(context,args)
                    .then((res)=>{
                        // console.log(res)
                        // setTimeout(function(){
                        //     // service.router.go({name:'home'})    
                        // },3000)
                        
                        resolvecb && resolvecb(res)
                        // service.session.set(url,res)
                    },(res)=>{
                        rejectcb && rejectcb(res)
                    })
            }
        }
        return promise
    }

    // 重写 Vue.http[method]
    var http = Vue.http
    ;['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach((type)=>{
        var method = http[type]
        http[type] = (...args)=> {
            console.log('this',this)
            return overrideXHRPromise(method, args, http, args[0])
        }
    })

    // 重写 Vue.resource(url)[method]
    var resource = Vue.resource
    Vue.resource = function(...args){
        console.log(args.cc)
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