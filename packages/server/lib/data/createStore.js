'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (ws) {
  const debug = (0, _debug2.default)(`store:${Math.random().toString(36).substr(2, 5)}`);
  const sagaMiddleware = (0, _reduxSaga2.default)();
  const store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(store => next => action => next(_extends({}, action, {
    meta: _extends({}, action.meta)
  })), (0, _reduxPromiseMiddleware2.default)(), (0, _reduxWebsocketBridge2.default)(() => ws, {
    fold: action => !/^@@/.test(action.type) && !/_DEMAND$/.test(action.type) && (!action.meta || action.meta.send !== false) && JSON.stringify(removeMeta(action)),
    unfold: payload => JSON.parse(payload)
  }), sagaMiddleware, store => next => action => {
    !action.type.startsWith('@@websocket/') && debug('received action', { type: action.type });

    return next(action);
  }));

  sagaMiddleware.run(_saga2.default);

  return store;
};

var _redux = require('redux');

var _reduxPromiseMiddleware = require('redux-promise-middleware');

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reduxWebsocketBridge = require('redux-websocket-bridge');

var _reduxWebsocketBridge2 = _interopRequireDefault(_reduxWebsocketBridge);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function removeMeta(action) {
  const { meta } = action,
        actionWithoutMeta = _objectWithoutProperties(action, ['meta']);

  return actionWithoutMeta;
}