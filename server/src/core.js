import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function initialize(state, docs) {
  const list = List(docs);
  return state.set('docs', docs);
}
