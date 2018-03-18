import { applyMiddleware, createStore } from 'redux';
import createWebSocketBridge from 'redux-websocket-bridge';

import rootReducer from './reducer';

export default function createStoreWithMiddleware() {
  const wsURL = new URL('/ws', window.location.href);

  wsURL.protocol = wsURL.protocol.replace(/^http/, 'ws');

  return createStore(
    rootReducer,
    applyMiddleware(
      createWebSocketBridge(wsURL.href)
    )
  );
}
