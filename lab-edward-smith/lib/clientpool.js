'use strict'
const EE = require('events');



var ClientPool = function() {
  this.ee = new EE();
  this.pool = {};
  this.ee.on('connect', (socket) => {
    let id = (Math.floor(Math.random() * 999999999999));
    socket.id = id;
    socket.nickname = 'guest_'+ id;
    this.pool[id] = socket;
    console.log(this.pool[id].id)
  })
  this.ee.on('broadcast', (data) => {
    console.log(data.toString())
  })
  this.ee.on('disconnect', () => {
    console.log(this.pool[id] + ' disconnected')
  })

}

// ClientPool.prototype.addClient = function(socket) {
//   socket.randomKey = (Math.floor(Math.random() * 999999999999));
//   this.pool['user_' + socket.randomKey] = socket
//   debugger;
// }



// Client.prototype.
module.exports = ClientPool;
