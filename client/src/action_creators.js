export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setConnectionState(state, connected) {
  return {
    type: 'SET_CONNECTION_STATE',
    state,
    connected
  };
}
