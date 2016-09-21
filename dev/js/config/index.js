export function a(){

}
export function b(){

}

    require.ensure(['./dev',function(val){
        console.log(val)
    }])
// if(true){}
// export {function_name} from './dev'