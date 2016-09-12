'use strict';

const expect = require('chai').expect;
const net    = require('net');

const server = require('../server');

describe('Chat Server', () => {
  it('creates a server', function() {
    expect(server).to.exist;
  });

  it('should have 2 clients', function() {
    this.client1 = net.connect(3000);
    this.client2 = net.connect(3000);
    expect(this.client1).to.exist;
    expect(this.client2).to.exist;
  });

  it('should write a message', function() {
    let message = ['test message TWO'];
    let messageOut = ['test message TWO'];

    this.client1.on('data', function(data) {
      expect(data.toString()).to.eql(message.pop());
      if (messageOut.length) {
        this.client2.write(messageOut.pop());
      } else {
        this.client2.end();
      }
    });
  });
});
