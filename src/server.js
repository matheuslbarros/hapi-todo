const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const authBasic = require('hapi-auth-basic');

const config = require('../config');

const routes = require('./plugins/routes');
const swagger = require('./plugins/swagger');

const simpleStrategie = require('./strategies/simple');
const tokenStrategie = require('./strategies/token');

const server = hapi.server({
  host: config.server.host,
  port: config.server.port,
});

const run = async () => {
  await server.register([
    authBasic,
    inert,
    vision,
    swagger,
  ]);

  server.auth.strategy(simpleStrategie.name, simpleStrategie.scheme, simpleStrategie.options);
  server.auth.scheme(tokenStrategie.scheme.name, tokenStrategie.scheme.scheme);
  server.auth.strategy(tokenStrategie.name, tokenStrategie.scheme.name);
  server.auth.default(tokenStrategie.name);

  await server.register(routes);
  await server.start();

  server.log(['server', 'start'], `Server running at ${server.info.uri}`);
};

module.exports = server;
module.exports.run = run;
