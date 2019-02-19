const hapiCors = require('hapi-cors');

const options = {
  origins: ['*'],
  allowCredentials: 'true',
  exposeHeaders: ['content-type', 'content-length'],
  methods: ['HEAD', 'OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  headers: ['accept', 'content-type', 'authorization', 'x-access-token'],
};

module.exports = {
  plugin: hapiCors,
  options,
};
