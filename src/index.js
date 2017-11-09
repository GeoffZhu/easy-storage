import { logger } from './utils.js'

const DEFAULT = {
  type: 'local'
}
const types = ['local', 'session']

export default class EasyStorage {
  constructor (options = {}) {
    if (~types.indexOf(options.type)) {
      this.type = options.type
    } else {
      logger('Type option only support "local" & "session", use default "local".')
      this.type = DEFAULT.type
    }
    this._engine = window[`${this.type}Storage`]
  }

  set (key, value) {
    this._engine.setItem(key, JSON.stringify(value))
  }

  get (key) {
    let value = this._engine.getItem(key)
    if value return JSON.parse(vlaue)
      else return null
  }

  remove (key) {
    this._engine.removeItem(key)
  }

  clear () {
    this._engine.clear()
  }
}




