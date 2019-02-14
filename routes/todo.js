
const findTodoHandler = require('../handlers/todo/find');
const findOneTodoHandler = require('../handlers/todo/findOne');
const createTodoHandler = require('../handlers/todo/create');
const updateTodoHandler = require('../handlers/todo/update');
const removeTodoHandler = require('../handlers/todo/remove');

const todoSchema = require('../schemas/todo');

const failRequest = require('../actions/failRequest');
const failResponse = require('../actions/failRequest');

module.exports = [
  {
    method: 'GET',
    path: '/api/todo',
    handler: findTodoHandler,
    options: {
      validate: {
        failAction: failRequest,
      },
      response: {
        status: {
          200: todoSchema.todoListSchema,
        },
        failAction: failResponse,
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
        failAction: failRequest,
      },
      response: {
        status: {
          200: todoSchema.todoSchema,
        },
        failAction: failResponse,
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
        failAction: failRequest,
      },
      response: {
        status: {
          201: todoSchema.todoSchema,
        },
        failAction: failResponse,
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
        failAction: failRequest,
      },
      response: {
        status: {
          200: todoSchema.todoSchema,
        },
        failAction: failResponse,
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
        failAction: failRequest,
      },
      response: {
        status: {
          204: false,
        },
        failAction: failResponse,
      },
      description: 'Delete todo',
      tags: ['api', 'todo'],
    },
  },
];
