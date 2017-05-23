<template>
    <div>
        <h2>welcome come use KS build</h2>
        
        <ks-button type="primary" v-on:click="dialog"><ks-icon name="lock"></ks-icon>调起KsDialog</ks-button>
        <ks-button type="primary" v-on:click="message">调起KsMessage(KsNoticeCenter)</ks-button>
        <br><br>
        <ks-button type="primary" v-on:click="http">发起请求http</ks-button>
        <ks-button type="primary" v-on:click="resource">发起请求resource</ks-button>
    </div>
</template>
<script type="text/javascript">
    export default {
        vuei:['KsDialog','KsMessage'],
        vuem:['common.region_get','common.region_delete'],
        data (){
            return {}
        },
        methods:{
            dialog(){
                this.$i.KsDialog()
            },
            message(){
                this.$i.KsMessage.info()
            },
            http(){
                this.$m.common.region_get({params:{id:4}})
                    .then((res)=>{
                        console.log(res)
                    })
            },
            resource(){
                this.$m.common.region_delete({id:'dd'})
                    .then((res)=>{
                        console.log(res)
                    })
            }
        },
        ready (){
        }
    }
</script>