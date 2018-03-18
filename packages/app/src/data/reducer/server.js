import * as ClientActions from '../action/client';

const DEFAULT_STATE = {
  connected: false
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ClientActions.CONNECTED:
      state = { ...state, connected: true };
      break;

    case ClientActions.DISCONNECTED:
      state = { ...state, connected: false };
      break;

    default: break;
  }

  return state;
}
