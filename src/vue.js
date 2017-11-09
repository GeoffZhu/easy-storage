import EasyStorage from './index.js'

export default class VueEasyStorage extends EasyStorage {
  constructor (options = {}) {
    super(options)
  }

  install (Vue) {
    Vue.prototype.$es = this
  }
}