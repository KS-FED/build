export default {
    // 省市区
    region_get:{get:'./region/get?a={id}',restful:false,abort:false},
    region_post:{post:'./region/update/{id}',payload:false,restful:false},
    region_delete:{delete:'./region/delete/{id}?name={name}',payload:false}

}