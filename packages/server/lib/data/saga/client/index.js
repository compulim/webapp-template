'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function* () {
  yield* (0, _connected2.default)();
};

var _connected = require('./connected');

var _connected2 = _interopRequireDefault(_connected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }