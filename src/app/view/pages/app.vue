<template>
    <div>
        {{appid}}<ks-button type="primary" v-on:click="vuex">调起Vuex</ks-button>
        <router-view ></router-view>
        
    </div>
</template>
<script type="text/javascript">
    import {updateMerchantAppid} from 'VUEX/actions.js'
    export default {
        vuex:{
            getters:{
                appid:(state)=> state.common.user_info.appid
            },
            actions:{
                updateMerchantAppid
            }
        },
        data (){
            return {}
        },
        methods:{
            vuex(){
                this.updateMerchantAppid(55)    
            }
        },
        ready (){
            
        }
    }
</script>