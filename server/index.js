import makeStore from './src/store';
import {startServer} from './src/server';

import {dbSetup} from './db';

dbSetup();

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_DATA',
  data: require('./data.json')
});
