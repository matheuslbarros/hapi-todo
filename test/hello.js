'use strict'

const Lab = require('lab');
const Code = require('code'); 
const server = require('../src/server');

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script());

// shortcuts from lab
const { describe, it, before } = lab;

// shortcuts from code
const { expect } = Code;

describe('hello feature', () => {

  before(async () => {
    server.run();
  });

  describe('GET hello', () => {

    it('return hello message', async () => {
      const request = {
        method: 'GET',
        url: '/hello?name=matheus',
      };

      const response = await server.inject(request)

      expect(response.statusCode).to.equal(200)
      expect(response.result).to.be.an.object();
    })

    it('throw 400', async () => {
      const request = {
        method: 'GET',
        url: '/hello',
      };

      const response = await server.inject(request)

      expect(response.statusCode).to.equal(400)
    })

  })
  
})
