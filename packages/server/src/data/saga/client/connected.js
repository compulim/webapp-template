import * as ClientActions from '../../action/client';
import { call, put, take, takeEvery } from 'redux-saga/effects';

function eventOnce(emitter, name) {
  return new Promise(resolve => {
    const handler = event => {
      emitter.removeEventListener(name, handler);
      resolve(event);
    };

    emitter.addEventListener(name, handler);
  });
}

export default function* connected() {
  yield takeEvery(ClientActions.CONNECTED, connectedSaga);
}

function* connectedSaga(action) {
  yield call(eventOnce, action.meta.ws, 'close');

  yield put(ClientActions.disconnected());
}
