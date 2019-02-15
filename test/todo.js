
const Lab = require('lab');
const Code = require('code');
const uuidv1 = require('uuid/v1');

const server = require('../src/server');
const userRepository = require('../src/repositories/user');
const todoRepository = require('../src/repositories/todo');

const { sign } = require('../src/helpers/token');

// Test files must require the lab module, and export a test script
const lab = Lab.script();

// shortcuts from lab
const { describe, it, before } = lab;

// shortcuts from code
const { expect } = Code;

describe('todo feature', () => {
  const context = {};

  before(async () => {
    const user = await userRepository.findByUsername('admin');

    context.headers = {
      'x-access-token': sign(user),
    };
  });

  describe('GET todo list', () => {
    it('return array', async () => {
      const request = {
        headers: context.headers,
        method: 'GET',
        url: '/api/todo',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.array();
    });

    it('throw unauthorized', async () => {
      const request = {
        method: 'GET',
        url: '/api/todo',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(401);
      expect(response.result).to.be.an.object();
    });
  });

  describe('GET todo', () => {
    before(async () => {
      context.todo = await todoRepository.create({
        title: 'title',
        description: 'description',
      });
    });

    it('return todo', async () => {
      const request = {
        headers: context.headers,
        method: 'GET',
        url: `/api/todo/${context.todo.id}`,
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.object();
      expect(response.result.title).to.be.a.string();
      expect(response.result.description).to.be.a.string();
    });

    it('throw not found', async () => {
      const request = {
        headers: context.headers,
        method: 'GET',
        url: `/api/todo/${uuidv1()}`,
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(404);
    });
  });

  describe('POST todo', () => {
    it('return todo', async () => {
      const request = {
        headers: context.headers,
        method: 'POST',
        url: '/api/todo',
        payload: {
          title: 'title',
          description: 'description',
        },
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(201);
      expect(response.result).to.be.an.object();
      expect(response.result.title).to.be.a.string();
      expect(response.result.description).to.be.a.string();
    });

    it('throw bad request', async () => {
      const request = {
        headers: context.headers,
        method: 'POST',
        url: '/api/todo',
        payload: {
        },
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(400);
      expect(response.result).to.be.an.object();
    });
  });

  describe('PUT todo', () => {
    before(async () => {
      context.todo = await todoRepository.create({
        title: 'title',
        description: 'description',
      });
    });

    it('return todo', async () => {
      const request = {
        headers: context.headers,
        method: 'PUT',
        url: `/api/todo/${context.todo.id}`,
        payload: {
          title: 'title updated',
          description: 'description updated',
          done: true,
        },
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.object();
      expect(response.result.title).to.be.a.string();
      expect(response.result.description).to.be.a.string();
      expect(response.result.done).to.be.boolean();
    });
  });

  describe('DELETE todo', () => {
    before(async () => {
      context.todo = await todoRepository.create({
        title: 'title',
        description: 'description',
      });
    });

    it('return nothing', async () => {
      const request = {
        headers: context.headers,
        method: 'DELETE',
        url: `/api/todo/${context.todo.id}`,
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(204);
    });
  });
});

exports.lab = lab;
