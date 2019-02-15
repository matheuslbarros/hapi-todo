const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const routes = require('./plugins/routes');
const swagger = require('./plugins/swagger');

const server = hapi.server({
  host: 'localhost',
  port: 9000,
});

const run = async () => {
  await server.register([
    inert,
    vision,
    swagger,
  ]);

  await server.register(routes);
  await server.start();

  server.log(['server', 'start'], `Server running at ${server.info.uri}`);
};

module.exports = server;
module.exports.run = run;
