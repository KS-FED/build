!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var s in o)("object"==typeof exports?exports:e)[s]=o[s]}}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="./dist/",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"KsIosSwitch",props:{color:{type:String,default:"#04BE02"},size:{type:String,default:"normal"},checked:{type:Boolean,twoWay:!0},disable:{type:Boolean,default:!1}},computed:{classesSize:function(){return"KSIosSwitch KSIosSwitch--"+this.size+" KSIosSwitch__UID--"+this._uid},styleBgColor:function(){return"box-shadow: "+this.color+" 0 0 0 16.667px inset!important;\n      background: "+this.color+"!important;border: 1px solid "+this.color+"!important;"}},watch:{checked:function(e){this.$emit("change",e)}}}},function(e,t){},function(e,t){e.exports=" <div :class=classesSize> <style> {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {\n      {{ styleBgColor }}\n    } </style> <input class=KSIosSwitch__entity type=checkbox v-model=checked :checked=\"defChecked && 'checked'\" :disabled=\"disable && 'disabled'\"/> <div class=KSIosSwitch__slide> <small class=KSIosSwitch__btn></small> <slot name=checkedChildren></slot> <slot name=unCheckedChildren></slot> </div> </div> "},function(e,t,o){var s,i;o(2),s=o(1),i=o(3),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});