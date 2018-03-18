const PREFIX = 'CLIENT/';

export const CONNECTED = `${ PREFIX }CONNECTED`;

export function connected(ws) {
  return {
    type: CONNECTED,
    meta: { ws }
  };
}

export const DISCONNECTED = `${ PREFIX }DISCONNECTED`;

export function disconnected() {
  return {
    type: DISCONNECTED,
    meta: { send: false }
  };
}
