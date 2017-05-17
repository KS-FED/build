export default {
    bind () {
        this.contains = (e) => {

            var equ

            if (this.el.contains(e.target)) return false

            // console.log(this.expression)
            if (this.expression 
                && 'function'== typeof this.vm[this.expression]) {

                this.vm[this.expression]()
                return
            }

            if(equ = splitEqu(this.expression)){
                // console.log(equ.name, equ.value)
                this.vm[equ.name] = equ.value
            }else{
                
                this.vm.hasOwnProperty('show')
                && (this.vm['show'] = false)
                
            }
        };
        document.addEventListener('click', this.contains,false)
    },
    unbind () {
        document.removeEventListener('click', this.contains,false)
    }

};

function splitEqu(expression){
    var arr = (expression||'').split('=')
    // console.log(arr)
    return arr.length>1
            ? {name:arr[0].trim(),value:arr[1].trim()=='true'}
            : false

}

