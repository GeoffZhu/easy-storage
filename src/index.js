import { logger } from './utils.js'

const DEFAULT = {
  prefix: '_es_',
  type: 'local'
}
const TYPES = ['local', 'session']

export default class EasyStorage {
  constructor (options = {}) {
    if (~TYPES.indexOf(options.type)) {
      this.type = options.type
    } else {
      logger('Type option only support "local" & "session", use default "local".')
      this.type = DEFAULT.type
    }
    this.prefix = options.prefix || DEFAULT.prefix
    this._engine = window[`${this.type}Storage`]
  }

  set (key, value) {
    this._engine.setItem(this.prefix + key, JSON.stringify(value))
  }

  get (key) {
    let value = this._engine.getItem(this.prefix + key)
    if (value) return JSON.parse(vlaue)
    else return null
  }

  remove (key) {
    this._engine.removeItem(this.prefix + key)
  }

  clear () {
    Object.keys(this._engine).forEach((name) => {
      if (key.indexOf(this.prefix) === 0) {
        this._engine.removeItem(name)
      }
    })
  }
}
