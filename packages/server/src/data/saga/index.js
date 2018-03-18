import Debug from 'debug';

import client from './client';

const debug = Debug('saga');

export default function* () {
  debug('registering all sagas');

  yield* client();
}
