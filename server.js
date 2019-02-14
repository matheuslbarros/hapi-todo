const hapi = require('hapi');
const routes = require('./plugins/routes');

const server = hapi.server({
  host: 'localhost',
  port: 9000,
});

const run = async function () {
  await server.register(routes);
  await server.start();

  console.log('Server running at:', server.info.uri);
};

module.exports = server;
module.exports.run = run;
