import Vuex from 'vuex'
import common from './modules/common'


export default function(Vue){
    Vue.use(Vuex)
    return new Vuex.Store({
        modules: {
            common
        },
        strict: true
    })   
}
 
