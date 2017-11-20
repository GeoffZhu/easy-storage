import { logger } from './utils.js'

const DEFAULT = {
  prefix: '',
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

  set (key, value, timeRange) {
    if (timeout) {
      let timeoutStamp = Date.now() + timeRange
      this._engine.setItem(this.prefix + key, `${timeoutStamp}:::${JSON.stringify(value)}`)
    } else {
      this._engine.setItem(this.prefix + key, JSON.stringify(value))
    }
  }

  get (key) {
    let nowStamp = Date.now()
    let valueString = this._engine.getItem(this.prefix + key)
    // 无值返回null
    if (!valueString) return null
    // 存在:::, 需验证是否过期
    if (~valueString.indexOf(':::')) {
      let valueArray = value.split(':::')
      let timeoutStamp = valueArray[0]
      let value = valueArray[1]
      if (timeoutStamp >= nowStamp) {
        return JSON.parse(value)
      } else {
        // 过期的直接删除，并返回null
        this.remove(key)
        return null
      }
    } else {
      return JSON.parse(value)
    }
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
