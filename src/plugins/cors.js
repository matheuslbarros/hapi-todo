const hapiCors = require('hapi-cors');

const options = {
  origins: ['*'],
  allowCredentials: 'true',
  exposeHeaders: ['content-type', 'content-length'],
  methods: ['HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE'],
  headers: ['Accept', 'Content-Type', 'Authorization'],
};

module.exports = {
  plugin: hapiCors,
  options,
};
