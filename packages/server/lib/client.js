'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _client = require('./data/action/client');

var _createStore = require('./data/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = (0, _debug2.default)('client');

function onErrorResumeNext(fn) {
  try {
    return fn();
  } catch (err) {}
}

class Client extends _events.EventEmitter {
  constructor(webSocket) {
    super();

    this.webSocket = webSocket;
    this.store = (0, _createStore2.default)(this.webSocket);
    this.emit('ready');
    this.store.dispatch((0, _client.connected)(this.webSocket));
  }
}
exports.default = Client;