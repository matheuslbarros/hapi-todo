
const Lab = require('lab');
const Code = require('code');

const server = require('../src/server');

// Test files must require the lab module, and export a test script
const lab = Lab.script();

// shortcuts from lab
const { describe, it } = lab;

// shortcuts from code
const { expect } = Code;

describe('home feature', () => {
  describe('GET home', () => {
    it('return message', async () => {
      const request = {
        method: 'GET',
        url: '/',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.object();
    });
  });
});

exports.lab = lab;
