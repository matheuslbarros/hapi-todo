
const tokenHandler = require('../handlers/token');
const tokenSchema = require('../schemas/token');
const responseSchema = require('../schemas/response');

module.exports = [
  {
    method: 'GET',
    path: '/auth/token',
    handler: tokenHandler,
    options: {
      auth: 'simple',
      validate: {
        headers: tokenSchema.tokenGetHeaders,
      },
      response: {
        status: {
          200: tokenSchema.tokenGetResponse,
          401: responseSchema.unauthorized,
          500: responseSchema.internalServerError,
        },
      },
      description: 'Get access token',
      notes: 'Here you will get your access token to start to use the API',
      tags: ['api', 'auth'],
    },
  },
];
