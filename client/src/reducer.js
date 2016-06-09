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

function setCurrentUser(state, newCurrentUser) {
  return state.setIn(
    ['data', 'currentUser'],
    Map({
      user_id: newCurrentUser.user_id,
      name: newCurrentUser.name
    })
  );
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    console.log("reducer SET_STATE triggered");
    return setState(state, action.state);
  case 'SET_CONNECTION_STATE':
    return setConnectionState(state, action.state, action.connected);
  case 'SET_CURRENT_USER':
    return setCurrentUser(state, action.newCurrentUser);
  }
  return state;
}
