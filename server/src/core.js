
import {Map, List} from 'immutable';

export const INITIAL_STATE = Map();

export function setData(state, data) {
  return state.set('data', Map(data));
}
