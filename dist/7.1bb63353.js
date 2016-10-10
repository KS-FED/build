webpackJsonp([7],{

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(68)
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
	  var id = "_v-077d4164/paging.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<!-- 分页 -->\n\t\t<div class=\"paging-box\">\n\t\t\t<div class=\"statistical\">共<span>123456</span>条</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t每页\n\t\t\t\t<select class=\"input\">\n\t\t\t\t\t<option>10</option>\n\t\t\t\t\t<option>20</option>\n\t\t\t\t\t<option>100</option>\n\t\t\t\t</select>\n\t\t\t\t条\n\t\t\t</div>\n\t\t\t<ul class=\"col-auto\">\n\t\t\t\t<li class=\"frist\"><</li>\n\t\t\t\t<li class=\"active\">1</li>\n\t\t\t\t<li>2</li>\n\t\t\t\t<li>3</li>\n\t\t\t\t<li>4</li>\n\t\t\t\t<li>5</li>\n\t\t\t\t<li>···</li>\n\t\t\t\t<li>99</li>\n\t\t\t\t<li>></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<pre>\n        <code class=\"html\">\n\t\t<div class=\"paging-box\">\n\t\t\t<div class=\"statistical\">共<span>123456</span>条</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t每页\n\t\t\t\t<select class=\"input\">\n\t\t\t\t\t<option>10</option>\n\t\t\t\t\t<option>20</option>\n\t\t\t\t\t<option>100</option>\n\t\t\t\t</select>\n\t\t\t\t条\n\t\t\t</div>\n\t\t\t<ul class=\"col-auto\">\n\t\t\t\t<li class=\"frist\"><</li>\n\t\t\t\t<li class=\"active\">1</li>\n\t\t\t\t<li>2</li>\n\t\t\t\t<li>3</li>\n\t\t\t\t<li>4</li>\n\t\t\t\t<li>5</li>\n\t\t\t\t<li>···</li>\n\t\t\t\t<li>99</li>\n\t\t\t\t<li>></li>\n\t\t\t</ul>\n\t\t</div>\n        </code>\n        </pre>\n\n        <pre>\n        <code class=\"scss\">\n\t\t// 分页组件\n\t\t.paging-box{\n\t\t\t//......\n\t\t\t.statistical{...}  \n\t\t\t.active{...}       //  选中样式\n\t\t\t.frist,.last{...}  //  首页/尾页样式\n\t\t}\n        </code>\n        </pre>\n\n\t</div>\n";

/***/ }

});
//# sourceMappingURL=7.1bb63353.js.map