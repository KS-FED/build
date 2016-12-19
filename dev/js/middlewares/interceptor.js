export default function install(Vue) {


    Vue.http.interceptors.push({

        request (request) {
            
            return request
        },

        response (response) {
            
            return response

        }

    })

}
