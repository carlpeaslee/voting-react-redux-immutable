import {INITIAL_STATE, initialize} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INITIALIZE':
    return initialize(state, action.docs);
  }
  return state;
}
