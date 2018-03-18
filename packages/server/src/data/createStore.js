import { applyMiddleware, createStore } from 'redux';
import createPromiseMiddleware from 'redux-promise-middleware';
import createWebSocketBridge from 'redux-websocket-bridge';
import Debug from 'debug';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

function removeMeta(action) {
  const { meta, ...actionWithoutMeta } = action;

  return actionWithoutMeta;
}

export default function (ws) {
  const debug = Debug(`store:${ Math.random().toString(36).substr(2, 5) }`);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(
      store => next => action => next({
        ...action,
        meta: {
          ...action.meta,
          // userID
        }
      }),
      createPromiseMiddleware(),
      createWebSocketBridge(() => ws, {
        fold: action =>
          !/^@@/.test(action.type)
          && !/_DEMAND$/.test(action.type)
          && (!action.meta || action.meta.send !== false)
          && JSON.stringify(removeMeta(action)),
        unfold: payload => JSON.parse(payload)
      }),
      sagaMiddleware,
      store => next => action => {
        !action.type.startsWith('@@websocket/') && debug('received action', { type: action.type });

        return next(action);
      }
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
