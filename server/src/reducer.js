
import {setData, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_DATA':
    return setData(state, action.data);
  }
  return state;
}
