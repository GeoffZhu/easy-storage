import EasyStorage from './index.js'

export function install (Vue, options) {
  Vue.prototype.$es = new EasyStorage(options)
}