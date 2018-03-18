import { EventEmitter } from 'events';
import Debug from 'debug';

import { connected } from './data/action/client';
import createStore from './data/createStore';

const debug = Debug('client');

function onErrorResumeNext(fn) {
  try {
    return fn();
  } catch (err) {}
}

export default class Client extends EventEmitter {
  constructor(webSocket) {
    super();

    this.webSocket = webSocket;
    this.store = createStore(this.webSocket);
    this.emit('ready');
    this.store.dispatch(connected(this.webSocket));
  }
}
