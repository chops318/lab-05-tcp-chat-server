'use strict';

const net        = require('net');
const ClientPool = require('./lib/clientpool.js')

var clients = new ClientPool();

let server  = net.createServer((socket) => {
  clients.ee.emit('register', socket);
  socket.on('data', (data) => {
    clients.ee.emit('broadcast', socket, data);
  })

  socket.on('end', () => {
    clients.ee.emit('disconnect', socket);
  })
})

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
