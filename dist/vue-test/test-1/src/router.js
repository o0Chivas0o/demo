"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require("vue-router");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require("./views/Home.vue");

var _Home2 = _interopRequireDefault(_Home);

var _About = require("./views/About.vue");

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: "/",
    name: "home",
    component: _Home2.default
  }, {
    path: "/about",
    name: "about",
    component: _About2.default
  }]
});
//# sourceMappingURL=router.js.map