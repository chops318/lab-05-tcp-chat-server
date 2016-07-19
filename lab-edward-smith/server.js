'use strict';

const net        = require('net');
const ClientPool = require('./lib/clientpool.js')

let server  = net.createServer((socket) => {
  var clients = new ClientPool();
  // clients.emit('arg')
  clients.ee.emit('connect', socket)
  socket.on('data', (message) => {
    clients.ee.emit('broadcast', message)
  })

  socket.on('end', () => {
    clients.ee.emit('disconnect', socket)
  })
})

server.listen(3000, () => {
  console.log('Server started on port 3000')
});
