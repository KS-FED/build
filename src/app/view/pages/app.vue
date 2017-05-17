<template>
    <div>
        {{appid}}
        <router-view ></router-view>
        
    </div>
</template>
<script type="text/javascript">
    export default {
        vuex:{
            getters:{
                appid:(state)=> state.common.user_info.appid
            }
        },
        data (){
            return {}
        },
        ready (){
            console.log(this.$utils)
        }
    }
</script>