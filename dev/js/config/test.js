webpackJsonp([25],{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

    var __vue_script__, __vue_template__
    __vue_script__ = __webpack_require__(225)
    if (__vue_script__ &&
        __vue_script__.__esModule &&
        Object.keys(__vue_script__).length > 1) {
      console.warn("[vue-loader] dev/js/views/weixin/pay.vue: named exports in *.vue files are ignored.")}
    __vue_template__ = __webpack_require__(227)
    module.exports = __vue_script__ || {}
    if (module.exports.__esModule) module.exports = module.exports.default
    if (__vue_template__) {
    (typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
    }
    if (false) {(function () {  module.hot.accept()
      var hotAPI = require("vue-hot-reload-api")
      hotAPI.install(require("vue"), false)
      if (!hotAPI.compatible) return
      var id = "./pay.vue"
      if (!module.hot.data) {
        hotAPI.createRecord(id, module.exports)
      } else {
        hotAPI.update(id, module.exports, __vue_template__)
      }
    })()}

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _model = __webpack_require__(226);

    var _model2 = _interopRequireDefault(_model);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = {
        data: function data() {
            this.model = (0, _model2.default)(this.$http);
            return {
                order_info: {},
                total: '',
                send: '',
                overtime: false

            };
        },

        methods: {
            pay: function pay() {
                var _this = this;

                this.model.wx_order({
                    amount: this.total * 100,
                    added_value: this.send * 100,
                    trade_desc: "充" + this.total + "元, 送" + this.send + "元"
                }).then(function (res) {
                    // if (res.data.code !== "SUCCESS") {return}
                    // *** 缓存订单信息
                    _this.order_info = res.data.result;
                });
            }
        },
        events: {
            'timer-end': function timerEnd() {
                this.overtime = true;
            }
        },
        ready: function ready() {
            // console.log(this.$route)
            this.total = this.$route.params.total;
            this.send = this.$route.params.send;
            this.pay();
        }
    };
    // </script>
    // <template>
    //     <!-- 微信支付 -->
    //
    //     <!--main content box-->
    //     <div class="main_content">
    //
    //         <!-- 支付信息 -->
    //         <div class="pay_details_cells">
    //
    //             <!-- 支付剩余时间 -->
    //             <div class="pay_details_cell_hd">
    //                 <i class="iconfont mr5">&#xe629;</i>支付时间剩余：<timer :time="'30:00'"></timer>
    //
    //             </div>
    //
    //             <!-- 支付金额 -->
    //             <div class="pay_money" style="height: 150px;">
    //                 <div class="account_cell_bd">
    //                     <div class="f15 tc">您需要支付</div>
    //                     <h2 class="fc_orange" style="font-size: 32px;">&yen;<span v-text="(+total).toFixed(2)"></span></h2>
    //                 </div>
    //             </div>
    //
    //             <!-- 支付方式 -->
    //             <div class="pay_details_cell_ft">
    //                 <i class="iconfont">&#xe62a;</i>
    //                 <div class="pay_type">
    //                     <p class="f15">微信支付</p>
    //                     <p class="f12 fc_light_gray">到店后佩戴专属徽章</p>
    //                 </div>
    //             </div>
    //
    //         </div>
    //
    //         <!-- 支付按钮 -->
    //         <div class="weui_opr_area">
    //             <p class="weui_btn_area m11">
    //                 <button type="button" class="weui_btn weui_btn_primary bg-col-default"
    //                     v-show="overtime">立即付款</button>
    //                 <a class="weui_btn weui_btn_primary bg-col-orange"
    //                     :href="'./pay.html?id='+order_info.id+'&amount='+order_info.amount"
    //                     v-show="!overtime">立即付款</a>
    //             </p>
    //         </div>
    //
    //     </div>
    //
    // </template>
    //
    // <script type="text/javascript">

/***/ },

/***/ 226:
/***/ function(module, exports) {

    "use strict";

    function model(http) {
        return {

            // 模拟
            wx_order: function wx_order(data) {

                // amount   Integer 当前购买的充值金额   是单位为分,充值的额度.
                // added_value  Integer 充值赠送的金额 是   单位为空,充值赠送的额度
                // trade_desc   String  该笔交易描述  是   该信息会在支付过程中显示给用户

                // var data = {
                //     "code": "SUCESS",
                //     "msg":"操作成功",
                //     "result": {
                //         "id":"1458785944",
                //         "amount":"1500"
                //     }
                // }

                return http.post({
                    url: "./c/wx/order",
                    method: "POST",
                    emulateJSON: false,
                    data: data
                });
            }
        };
    }

    module.exports = model;

/***/ },

/***/ 227:
/***/ function(module, exports) {

    module.exports = "\n<!-- 微信支付 -->\n\n<!--main content box-->\n<div class=\"main_content\">\n\n    <!-- 支付信息 -->\n    <div class=\"pay_details_cells\">\n\n        <!-- 支付剩余时间 -->\n        <div class=\"pay_details_cell_hd\">\n            <i class=\"iconfont mr5\">&#xe629;</i>支付时间剩余：<timer :time=\"'30:00'\"></timer>\n            \n        </div>\n\n        <!-- 支付金额 -->\n        <div class=\"pay_money\" style=\"height: 150px;\">\n            <div class=\"account_cell_bd\">\n                <div class=\"f15 tc\">您需要支付</div>\n                <h2 class=\"fc_orange\" style=\"font-size: 32px;\">&yen;<span v-text=\"(+total).toFixed(2)\"></span></h2>\n            </div>\n        </div>\n\n        <!-- 支付方式 -->\n        <div class=\"pay_details_cell_ft\">\n            <i class=\"iconfont\">&#xe62a;</i>\n            <div class=\"pay_type\">\n                <p class=\"f15\">微信支付</p>\n                <p class=\"f12 fc_light_gray\">到店后佩戴专属徽章</p>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- 支付按钮 -->\n    <div class=\"weui_opr_area\">\n        <p class=\"weui_btn_area m11\">\n            <button type=\"button\" class=\"weui_btn weui_btn_primary bg-col-default\"\n                v-show=\"overtime\">立即付款</button>\n            <a class=\"weui_btn weui_btn_primary bg-col-orange\"\n                :href=\"'./pay.html?id='+order_info.id+'&amount='+order_info.amount\"\n                v-show=\"!overtime\">立即付款</a>\n        </p>\n    </div>\n\n</div>\n\n";

/***/ }

});