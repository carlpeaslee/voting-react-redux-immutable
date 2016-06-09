
import {setData, setCurrentUser, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_DATA':
    return setData(state, action.data);
  case 'SET_CURRENT_USER':
    return setCurrentUser(state, action.newCurrentUser);
  }
  return state;
}
