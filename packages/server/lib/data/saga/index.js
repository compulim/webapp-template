'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function* () {
  debug('registering all sagas');

  yield* (0, _client2.default)();
};

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = (0, _debug2.default)('saga');