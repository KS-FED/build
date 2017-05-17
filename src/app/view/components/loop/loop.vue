<template>
    <li>
        <div>
            <input type="checkbox" v-model="val.checked" v-on:change="change(val)">&nbsp;&nbsp;<label v-on:click="toggle()">{{val.label}}</label>
        </div>
        <ul v-if="val[sub]" v-show="show">
            <loop v-for="item in val[sub]" :val="item" :sub="sub"></loop> 
        </ul>
    </li>
</template>
<script type="text/javascript">
    export default {
        props:{
            parent:[],
            val:[],
            sub:[]
        },
        data(){
            return {
                show:true
            }
        },
        computed: {
            hasSub: function () {
              return this.val[this.sub] &&
                this.val[this.sub].length
            }
        },
        methods:{
            change(val){
                // val.current = true
                if(this.hasSub){
                    this.iterator(this.val[this.sub],val.checked)
                }
                this.$dispatch('change')
            },
            // 遍历操作
            iterator(items,checked){
                items.forEach((item)=>{
                    item.checked = checked
                    if(item[this.sub] && item[this.sub].length){
                        this.iterator(item[this.sub],checked)
                    }
                })
            },
            toggle(){
                if(this.hasSub){
                    this.show = !this.show
                }
            }
        },
        
        created(){
            // console.log(this.parent)
            // this.val = this.val[this.sub]||this.val
            // console.log(this.val.label)
        }
    }
</script>
<style lang="scss">
    ul {
        ul {
            padding-left: 24px;
        }
    }
</style>