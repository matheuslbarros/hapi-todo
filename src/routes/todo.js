
const findTodoHandler = require('../handlers/todo/find');
const findOneTodoHandler = require('../handlers/todo/findOne');
const createTodoHandler = require('../handlers/todo/create');
const updateTodoHandler = require('../handlers/todo/update');
const removeTodoHandler = require('../handlers/todo/remove');

const todoSchema = require('../schemas/todo');
const responseSchema = require('../schemas/response');

module.exports = [
  {
    method: 'GET',
    path: '/api/todo',
    handler: findTodoHandler,
    options: {
      response: {
        status: {
          200: todoSchema.todoListSchema,
          400: responseSchema.badRequest,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'List todos',
      tags: ['api', 'todo'],
    },
  },
  {
    method: 'GET',
    path: '/api/todo/{id}',
    handler: findOneTodoHandler,
    options: {
      validate: {
        params: {
          id: todoSchema.todoId,
        },
      },
      response: {
        status: {
          200: todoSchema.todoSchema,
          400: responseSchema.badRequest,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'Retrieve todo',
      tags: ['api', 'todo'],
    },
  },
  {
    method: 'POST',
    path: '/api/todo',
    handler: createTodoHandler,
    options: {
      validate: {
        payload: todoSchema.todoCreate,
      },
      response: {
        status: {
          201: todoSchema.todoSchema,
          400: responseSchema.badRequest,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'Create todo',
      tags: ['api', 'todo'],
    },
  },
  {
    method: 'PUT',
    path: '/api/todo/{id}',
    handler: updateTodoHandler,
    options: {
      validate: {
        params: {
          id: todoSchema.todoId,
        },
        payload: todoSchema.todoUpdate,
      },
      response: {
        status: {
          200: todoSchema.todoSchema,
          400: responseSchema.badRequest,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'Update todo',
      tags: ['api', 'todo'],
    },
  },
  {
    method: 'DELETE',
    path: '/api/todo/{id}',
    handler: removeTodoHandler,
    options: {
      validate: {
        params: {
          id: todoSchema.todoId,
        },
      },
      response: {
        status: {
          204: false,
          400: responseSchema.badRequest,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'Delete todo',
      tags: ['api', 'todo'],
    },
  },
];
