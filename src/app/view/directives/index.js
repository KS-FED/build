import KsClickOutside from './KsClickOutside.js'

var directives = {
    KsClickOutside
}
export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));
};
