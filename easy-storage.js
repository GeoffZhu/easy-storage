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
  type: 'local'
};
var types = ['local', 'session'];

var engine = void 0;

var EasyStorage = function () {
  function EasyStorage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EasyStorage);

    if (~types.indexOf(options.type)) {
      this.type = options.type;
    } else {
      logger('Type option only support "local" & "session", use default "local".');
      this.type = DEFAULT.type;
    }
    engine = window[this.type + 'Storage'];
  }

  _createClass(EasyStorage, [{
    key: 'set',
    value: function set(key, value) {
      engine.setItem(key, value);
    }
  }, {
    key: 'get',
    value: function get(key) {
      engine.getItem(key);
    }
  }, {
    key: 'remove',
    value: function remove(key) {}
  }, {
    key: 'removeAll',
    value: function removeAll() {}
  }]);

  return EasyStorage;
}();

return EasyStorage;

})));
//# sourceMappingURL=easy-storage.js.map
