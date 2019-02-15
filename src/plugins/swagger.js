
const hapiSwagger = require('hapi-swagger');
const packageJson = require('../../package');

const options = {
  info: {
    title: 'Todo API Documentation',
    version: packageJson.version,
  },
};

module.exports = {
  plugin: hapiSwagger,
  options,
};
