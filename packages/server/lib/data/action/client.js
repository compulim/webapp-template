'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connected = connected;
exports.disconnected = disconnected;
const PREFIX = 'CLIENT/';

const CONNECTED = exports.CONNECTED = `${PREFIX}CONNECTED`;

function connected(ws) {
  return {
    type: CONNECTED,
    meta: { ws }
  };
}

const DISCONNECTED = exports.DISCONNECTED = `${PREFIX}DISCONNECTED`;

function disconnected() {
  return {
    type: DISCONNECTED,
    meta: { send: false }
  };
}