import connected from './connected';

export default function* () {
  yield* connected();
}
