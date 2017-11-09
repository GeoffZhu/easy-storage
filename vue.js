(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.EasyStorage = factory());
}(this, (function () { 'use strict';

function logger(msg) {
  console.warn("EasyStorage: " + msg);
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT = {
  prefix: '_es_',
  type: 'local'
};
var TYPES = ['local', 'session'];

var EasyStorage = function () {
  function EasyStorage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EasyStorage);

    if (~TYPES.indexOf(options.type)) {
      this.type = options.type;
    } else {
      logger('Type option only support "local" & "session", use default "local".');
      this.type = DEFAULT.type;
    }
    this.prefix = options.prefix || DEFAULT.prefix;
    this._engine = window[this.type + 'Storage'];
  }

  _createClass(EasyStorage, [{
    key: 'set',
    value: function set(key, value) {
      this._engine.setItem(this.prefix + key, JSON.stringify(value));
    }
  }, {
    key: 'get',
    value: function get(key) {
      var value = this._engine.getItem(this.prefix + key);
      if (value) return JSON.parse(vlaue);else return null;
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      this._engine.removeItem(this.prefix + key);
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this = this;

      Object.keys(this._engine).forEach(function (name) {
        if (key.indexOf(_this.prefix) === 0) {
          _this._engine.removeItem(name);
        }
      });
    }
  }]);

  return EasyStorage;
}();

function install(Vue, options) {
  Vue.prototype.$es = new EasyStorage(options);
}

return install;

})));
