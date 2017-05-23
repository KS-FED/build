import api from './api/index.js'
import vuex from './vuex'
import vuem from './vuem'


if(!Vue) {console.error('please install Vue')}


Vue.use(vuem,api, {restful:true,payload:true})


export default vuex(Vue)

