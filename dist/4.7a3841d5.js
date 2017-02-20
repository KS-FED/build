webpackJsonp([4],{

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!babel-loader!./../../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
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

/***/ 62:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <h2>tree</h2>\n    <ul>\n        <!-- <loop :val.sync=\"data\" sub=\"children\"></loop> -->\n        <loop :val.sync=\"item\" v-for=\"item in data\" sub=\"children\"></loop>\n    </ul>\n</div>\n";

/***/ }

});