
const hapiSwagger = require('hapi-swagger');
const package = require('../package');

const options = {
  info: {
    title: 'Todo API Documentation',
    version: package.version,
  },
};

module.exports = {
  plugin: hapiSwagger,
  options,
};
