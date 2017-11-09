import EasyStorage from './index.js'

export default function install (Vue, options) {
  Vue.prototype.$es = new EasyStorage(options)
}