import store from 'store2'

var cookie = store.cookie = {}
cookie.get = function (cookie_name) {
    var strCookie = document.cookie
    var arrCookie = strCookie.split('; ')
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split('=')
        if(cookie_name == arr[0]){
            return arr[1]
        }
    }
    return ''
}

cookie.set = function (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    var expires = 'expires='+d.toUTCString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
}

cookie.clear = function (name) {  
    cookie.set(name, '', -1)
} 


export default {
    local:store.local,
    session:store.session,
    cookie:store.cookie
}
// console.log(Object.keys(store) 
//             ,Object.keys(store.local) 
//             ,Object.keys(store.session));