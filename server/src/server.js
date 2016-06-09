
import Server from 'socket.io';
import r from 'rethinkdb';

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe( () => {
    let newState = store.getState().toJS();
    io.emit('state', newState);
    r.connect({db:"vote"}).then(function(conn) {
      r.table('data').insert(newState).run(conn, function(err, cursor) {
        if (err) {console.log(err);}
      });
    })
  });

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });

}
