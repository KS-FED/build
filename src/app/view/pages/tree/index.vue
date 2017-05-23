<template>
    <div>
        <other-component></other-component>
        <h2>tree</h2>{{appid}}
        <ul>
            <!-- <loop :val.sync="data" sub="children"></loop> -->
            <loop :val.sync="item" v-for="item in data" sub="children"></loop>
        </ul>
        <button type="button" v-on:click="
        $i.KsDialog.success('ss')">确认</button>
    </div>
</template>
<script type="text/javascript">
    export default {
        vuei:['intersection','session','KsDialog'],
        vuem:['common.region_get','common.region_post','common.region_delete','session','cc'],
        vuex:{
            getters:{
                appid:(state)=> state.common.user_info.appid
            }
        },
        data (){
            return {
                data:[
                    {label:'功能',checked:true,
                    children:[
                        {label:'门店',checked:true,
                        children:[
                            {label:'查询',checked:true},    
                            {label:'编辑',checked:true}
                        ]},
                        {label:'营销',checked:true,
                        children:[
                            {label:'查询',checked:true},    
                            {label:'编辑',checked:true}
                        ]},
                        {label:'会员卡',checked:true,
                        children:[
                            {label:'查询',checked:true},    
                            {label:'编辑',checked:true}
                        ]},
                        {label:'储值卡',checked:true,
                        children:[
                            {label:'查询',checked:true},    
                            {label:'编辑',checked:true}
                        ]},
                        {label:'积分卡',checked:true},
                        {label:'现金红包',checked:true}
                    ]},
                    {label:'管理',checked:true,
                    children:[
                        {label:'会员管理',checked:true},
                        {label:'财务对账',checked:true}
                    ]},
                    {label:'设置',checked:true,
                    children:[
                        {label:'基本设置',checked:true},
                        {label:'安全中心',checked:true}
                    ]}
                ]
            }
        },
        methods:{
            dataHandle(data){
                var bool = true
                var node = data
                data = node.children || node

                data.forEach((item,i)=>{

                    // console.log(item.label,'2222')
                    if(item.children){
                        this.dataHandle(item)
                    }

                    if(!item.checked){
                        bool = false
                    }
                    // console.log(item.label,'2222')
                    
                })
                if(node.children){
                    node.checked = bool    
                }
                

                // console.log(data)
                return
                this.iterator(data,(item,heap,temp)=>{
                    
                    if(item.current){
                        temp.current = true
                        temp.label = heap[0].label
                        temp.checked = item.checked
                    }
                    if(item.label == temp.label){
                        temp.current = false
                        temp.label = ''
                    }
                    if(temp.current){
                        item.checked = temp.checked
                    }

                    item.current = false
                })
                
            },
            iterator(data,cb) {
                if (!data || !data.length) return;

                var heap = [];
                var temp = {};

                //先将第一层节点放入栈
                for (var i = 0, len = data.length; i < len; i++) {
                    heap.push(data[i]);
                }

                var item;

                while (heap.length) {

                    item = heap.shift();
                    
                    if(typeof cb === 'function') cb(item,heap,temp)
                    

                    //如果该节点有子节点，继续添加进入栈顶
                    if (item.children && item.children.length) {
                        heap = item.children.concat(heap);
                    }
                }
            },
            submit(){
                console.log(JSON.parse(JSON.stringify(this.data)))
                this.$i.KsDialog.success('ss')
            },
            hide(){
                console.log('1')
            }

        },
        
        created (){
            this.$on('change',()=>{
                this.dataHandle(this.data)
            })
        },
        ready(){
            
           
            // this.$i.KsDialog.success()
            this.$m.common.region_delete({id:'1'},{body:'body content'})
                .then((data)=>{
                    // console.log(data,this)

                })

            // setTimeout(()=>{
            //     this.$m.common.region_delete({id:'1',name:'username2'},{body:'body content'})
            //     .then((data)=>{
            //         // console.log(data,this)

            //     })   
            // },3000)
             

            // console.log(this.$m)
            // this.$i.session.set('a','新插入一条')
            

            // console.log('$i.session.get: ',this.$i.session.get('a'))
            
            // console.log('intersection:',this.$i.intersection(['s','执2行'],['执行','s']))
           
        }

    }









    
       
    
</script>