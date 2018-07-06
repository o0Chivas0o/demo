"use strict";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = require("./App.vue");

var _App2 = _interopRequireDefault(_App);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

require("./registerServiceWorker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

new _vue2.default({
  router: _router2.default,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount("#app");
//# sourceMappingURL=main.js.map