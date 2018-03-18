'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = main;

var _http = require('http');

var _path = require('path');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = (0, _debug2.default)('server');

function main({ port }) {
  const app = (0, _express2.default)();
  const server = (0, _http.createServer)(app);
  const wss = new _ws2.default.Server({ server });

  app.use(_express2.default.static((0, _path.join)(__dirname, '../../app/build')));

  wss.on('connection', ws => {
    const client = new _client2.default(ws);
  });

  server.listen(port, () => {
    debug(`Listening to port ${port}`);
  });
}