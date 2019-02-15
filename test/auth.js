
const Lab = require('lab');
const Code = require('code');

const server = require('../src/server');

// Test files must require the lab module, and export a test script
const lab = Lab.script();

// shortcuts from lab
const { describe, it, before } = lab;

// shortcuts from code
const { expect } = Code;

describe('token feature', () => {
  before(() => {
    server.run();
  });

  describe('GET token', () => {
    it('return token', async () => {
      const request = {
        headers: {
          authorization: `Basic ${Buffer.from('admin:password').toString('base64')}`,
        },
        method: 'GET',
        url: '/auth/token',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.object();
    });

    it('throw unauthorized when username is invalid', async () => {
      const request = {
        headers: {
          authorization: `Basic ${Buffer.from('guest:password').toString('base64')}`,
        },
        method: 'GET',
        url: '/auth/token',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(401);
      expect(response.result).to.be.an.object();
    });

    it('throw unauthorized when authorization is invalid', async () => {
      const request = {
        method: 'GET',
        url: '/auth/token',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(401);
      expect(response.result).to.be.an.object();
    });
  });
});

exports.lab = lab;
