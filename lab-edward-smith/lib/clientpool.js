'use strict';
const EE = require('events');

var ClientPool = function() {
  this.ee = new EE();
  this.pool = [];
  this.ee.on('register', (socket) => {
    let id = (Math.floor(Math.random() * 999999999999));
    socket.id = id;
    socket.nickname = 'guest_'+ id;
    this.pool.push(socket);
    this.message(socket, socket.nickname + ' has connected to the server\n');
  });
  this.ee.on('broadcast', (socket, data) => {
    this.message(socket, data);
  });
  this.ee.on('disconnect', (socket) => {
    this.message(socket, socket.nickname + ' disconnected');
    this.pool.indexOf(socket, 1);
    this.pool.splice(this.pool.indexOf(socket), 1);
    console.log(this.pool.length);
  });
  this.message = function(sender, message) {
    this.pool.forEach(function(client) {
      if (client !== sender);
      client.write(sender.nickname + ': ' + message);
    });
  };
};

module.exports = ClientPool;
