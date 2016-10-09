<template>
    <div>
        <pre>
        <code class="javascript">
            var a = 'sss';
            console.log(a)
        </code>
        </pre>
        <pre>
        <code class="javascript">
            var a = 'sss';
            console.log(a)
        </code>
        </pre>

          <pre>
        <code class="html">
            <div>
                 <div>
                      <span></span>
                  </div> 
              </div>  
        </code>
        </pre>
       

    </div>
</template>
<script >
    export default {
        data (){
            return {

            }
        },
        ready (){
            document.querySelectorAll('pre code').forEach(val=>{
                if(val.className === 'html'){
                    val.innerHTML = val.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;')
                }
                hljs.initHighlightingOnLoad(val)
            })
            // setTimeout(()=>{
            //     alert('00')
                
            // },2000)
        }
    }
</script>