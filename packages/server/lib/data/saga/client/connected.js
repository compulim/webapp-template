'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connected;

var _client = require('../../action/client');

var ClientActions = _interopRequireWildcard(_client);

var _effects = require('redux-saga/effects');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function eventOnce(emitter, name) {
  return new Promise(resolve => {
    const handler = event => {
      emitter.removeEventListener(name, handler);
      resolve(event);
    };

    emitter.addEventListener(name, handler);
  });
}

function* connected() {
  yield (0, _effects.takeEvery)(ClientActions.CONNECTED, connectedSaga);
}

function* connectedSaga(action) {
  yield (0, _effects.call)(eventOnce, action.meta.ws, 'close');

  yield (0, _effects.put)(ClientActions.disconnected());
}