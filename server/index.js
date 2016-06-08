import makeStore from './src/store';
import {startServer} from './src/server';
import db from './db'


db.setup();

export const store = makeStore();
startServer(store);



store.dispatch({
  type: 'INITIALIZE',
  docs: require('./data.json')
});
