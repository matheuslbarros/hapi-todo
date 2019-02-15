'use strict'

const Lab = require('lab');
const Code = require('code');
const server = require('../src/server');
const repository = require('../src/repositories/todo');
const uuidv1 = require('uuid/v1');

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script());

// shortcuts from lab
const { describe, it, before } = lab;

// shortcuts from code
const { expect } = Code;

describe('todo feature', () => {

  describe('GET todo list', () => {

    it('return array', async () => {
      const request = {
        method: 'GET',
        url: '/api/todo',
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.array();
    })

  })

  describe('GET todo', () => {

    const context = {};

    before(async () => {
      context.todo = await repository.create({
        title: 'title',
        description: 'description',
      });
    })

    it('return todo', async () => {
      const request = {
        method: 'GET',
        url: '/api/todo/' + context.todo.id,
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(200);
      expect(response.result).to.be.an.object();
      expect(response.result.title).to.be.a.string();
      expect(response.result.description).to.be.a.string();
    })

    it('throw 404', async () => {
      const request = {
        method: 'GET',
        url: '/api/todo/' + uuidv1(),
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(404);
    })

  })

  describe('POST todo', () => {

    it('return todo', async () => {
      const request = {
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
    })

  })

  describe('PUT todo', () => {

    const context = {};

    before(async () => {
      context.todo = await repository.create({
        title: 'title',
        description: 'description',
      });
    })

    it('return todo', async () => {
      const request = {
        method: 'PUT',
        url: '/api/todo/' + context.todo.id,
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
    })

  })

  describe('DELETE todo', () => {

    const context = {}

    before(async () => {
      context.todo = await repository.create({
        title: 'title',
        description: 'description',
      });
    })

    it('return nothing', async () => {
      const request = {
        method: 'DELETE',
        url: '/api/todo/' + context.todo.id,
      };

      const response = await server.inject(request);

      expect(response.statusCode).to.equal(204)
    })

  })

})
