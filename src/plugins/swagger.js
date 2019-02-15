
const hapiSwagger = require('hapi-swagger');
const packageJson = require('../../package');

const options = {
  info: {
    title: 'Todo API Documentation',
    version: packageJson.version,
    description: 'Generate an access token to start to use the API',
  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'x-access-token',
      in: 'header',
    },
  },
};

module.exports = {
  plugin: hapiSwagger,
  options,
};
