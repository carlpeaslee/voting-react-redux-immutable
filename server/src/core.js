
import {Map, List} from 'immutable';

export const INITIAL_STATE = Map();

export function setData(state, data) {
  return state.set('data', Map(data));
}

export function setCurrentUser(state, newCurrentUser) {
  return state.setIn(
    ['data', 'currentUser'],
    Map({
      user_id: newCurrentUser.user_id,
      name: newCurrentUser.name
    })
  );
}
