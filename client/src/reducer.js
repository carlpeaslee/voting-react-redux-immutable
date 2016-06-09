import {List, Map} from 'immutable';

function setState(state, newState) {
  console.log("SetState function in reducer triggered");
  return state.merge(newState);
}

function setConnectionState(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState,
    connected
  }));
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    console.log("reducer SET_STATE triggered");
    return setState(state, action.state);
  case 'SET_CONNECTION_STATE':
    return setConnectionState(state, action.state, action.connected);
  }
  return state;
}
