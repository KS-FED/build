export default {
    // 省市区
    region_get:{get:'./region/get?id={id}',restful:false,abort:false,cache:false},
    region_post:{post:'./region/update/{id}',payload:false,restful:false},
    region_delete:{delete:'./region/delete/{id}',restful:true,payload:false,abort:true,cache:true}

}