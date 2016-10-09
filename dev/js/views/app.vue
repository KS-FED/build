<template>
    <div>
        主路由
        <router-view ></router-view>
    </div>
</template>
<script type="text/javascript">
    export default {
        data (){
            return {}
        },
        ready (){
            document.querySelectorAll('pre code').forEach(val=>{
                if(val.className === 'html'){
                    val.innerHTML = val.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;')
                }
                hljs.initHighlightingOnLoad(val)
            })  
        }
    }
</script>