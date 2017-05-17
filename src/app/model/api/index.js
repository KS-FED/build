import common from './common.js'
import member from './member.js'

var api = {
    common,
    member,
    cc:{delete:'./region/get/{id}',payload:true,restful:true}
}


export default reduce(api,{})

function reduce(data,models){
    return Object.keys(data).reduce((temp,key)=>{
        temp[key] = data[key]
        return temp
        
    },models)
}