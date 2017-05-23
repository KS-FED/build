var isObject = Vue.util.isObject
var merge = Vue.util.mergeOptions
var urlTpl = Vue.url

export{
    isObject,
    merge,
    mergeMulti,
    urlTpl
}


/**
 * [mergeMulti description]
 * mergeMulti({},{name:'zdz'},{age:33})
 */
function mergeMulti(data,...args){
    data = data ||{}
    return args.reduce(function(pending,item){
        return merge(pending,item)
    },data)
}