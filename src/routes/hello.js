
const helloHandler = require('../handlers/hello');
const helloSchema = require('../schemas/hello');

const failRequest = require('../actions/failRequest');
const failResponse = require('../actions/failRequest');

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: helloHandler,
    options: {
      validate: {
        query: helloSchema.helloGetQuery,
        failAction: failRequest,
      },
      response: {
        status: {
          200: helloSchema.helloGet200,
        },
        failAction: failResponse,
      },
      description: 'Say hello!',
      notes: 'The user parameter defaults to \'stranger\' if unspecified',
      tags: ['api', 'greeting'],
    },
  },
];
