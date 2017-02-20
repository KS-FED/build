webpackJsonp([4],{

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(61)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/views/tree/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-706789d2/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 61:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div>
	//         <h2>tree</h2>
	//         <ul>
	//             <!-- <loop :val.sync="data" sub="children"></loop> -->
	//             <loop :val.sync="item" v-for="item in data" sub="children"></loop>
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    data: function data() {
	        return {
	            data: [{ label: '功能', checked: true, current: false,
	                children: [{ label: '门店', checked: true, current: false,
	                    children: [{ label: '查询', checked: true, current: false }, { label: '编辑', checked: true, current: false }] }, { label: '营销', checked: true, current: false,
	                    children: [{ label: '查询', checked: true, current: false }, { label: '编辑', checked: true, current: false }] }, { label: '会员卡', checked: true, current: false,
	                    children: [{ label: '查询', checked: true, current: false }, { label: '编辑', checked: true, current: false }] }, { label: '储值卡', checked: true, current: false,
	                    children: [{ label: '查询', checked: true, current: false }, { label: '编辑', checked: true, current: false }] }, { label: '积分卡', checked: true, current: false }, { label: '现金红包', checked: true, current: false }] }, { label: '管理', checked: true, current: false,
	                children: [{ label: '会员管理', checked: true, current: false }, { label: '财务对账', checked: true, current: false }] }, { label: '设置', checked: true, current: false,
	                children: [{ label: '基本设置', checked: true, current: false }, { label: '安全中心', checked: true, current: false }] }]
	        };
	    },

	    methods: {
	        dataHandle: function dataHandle(data) {
	            var _this = this;

	            data.forEach(function (item, i) {

	                if (item.children) {
	                    return _this.dataHandle(item.children);
	                }
	            });
	        }
	    },

	    created: function created() {
	        var _this2 = this;

	        this.$on('change', function () {
	            _this2.dataHandle(_this2.data);
	        });
	    }
	}(function (window, undefined) {
	    var treeNodes = [{
	        id: 1,
	        name: '1',
	        children: [{
	            id: 11,
	            name: '11',
	            children: [{
	                id: 111,
	                name: '111',
	                children: []
	            }, {
	                id: 112,
	                name: '112'
	            }]
	        }, {
	            id: 12,
	            name: '12',
	            children: []
	        }],
	        users: []
	    }, {
	        id: 2,
	        name: '2',
	        children: [{
	            id: 22,
	            name: '22',
	            children: []
	        }]
	    }];

	    //递归实现
	    var parseTreeJson = function parseTreeJson(treeNodes) {
	        if (!treeNodes || !treeNodes.length) return;

	        for (var i = 0, len = treeNodes.length; i < len; i++) {

	            var childs = treeNodes[i].children;

	            console.log(treeNodes[i].id);

	            if (childs && childs.length > 0) {
	                parseTreeJson(childs);
	            }
	        }
	    };

	    console.log('------------- 递归实现 ------------------');
	    parseTreeJson(treeNodes);

	    //非递归广度优先实现
	    var iterator1 = function iterator1(treeNodes) {
	        if (!treeNodes || !treeNodes.length) return;

	        var stack = [];

	        //先将第一层节点放入栈
	        for (var i = 0, len = treeNodes.length; i < len; i++) {
	            stack.push(treeNodes[i]);
	        }

	        var item;

	        while (stack.length) {
	            item = stack.shift();

	            console.log(item.id);

	            //如果该节点有子节点，继续添加进入栈底
	            if (item.children && item.children.length) {
	                //len = item.children.length;

	                // for (i = 0; i < len; i++) {
	                //  stack.push(item.children[i]);
	                // }

	                stack = stack.concat(item.children);
	            }
	        }
	    };

	    console.log('------------- 非递归广度优先实现 ------------------');
	    iterator1(treeNodes);

	    //非递归深度优先实现
	    var iterator2 = function iterator2(treeNodes) {
	        if (!treeNodes || !treeNodes.length) return;

	        var stack = [];

	        //先将第一层节点放入栈
	        for (var i = 0, len = treeNodes.length; i < len; i++) {
	            stack.push(treeNodes[i]);
	        }

	        var item;

	        while (stack.length) {
	            item = stack.shift();

	            console.log(item.id);

	            //如果该节点有子节点，继续添加进入栈顶
	            if (item.children && item.children.length) {
	                // len = item.children.length;

	                // for (; len; len--) {
	                //  stack.unshift(item.children[len - 1]);
	                // }
	                stack = item.children.concat(stack);
	            }
	        }
	    };

	    console.log('------------- 非递归深度优先实现 ------------------');
	    iterator2(treeNodes);
	})(window);
	// </script>

/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <h2>tree</h2>\n    <ul>\n        <!-- <loop :val.sync=\"data\" sub=\"children\"></loop> -->\n        <loop :val.sync=\"item\" v-for=\"item in data\" sub=\"children\"></loop>\n    </ul>\n</div>\n";

/***/ }

});