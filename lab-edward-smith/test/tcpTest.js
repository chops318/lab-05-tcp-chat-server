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
});
