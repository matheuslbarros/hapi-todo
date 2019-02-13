const hapi = require('hapi');
const routes = require('./plugins/routes');

const server = hapi.server({
  host: 'localhost',
  port: 9000,
});

const start = async function () {
  try {
    await server.register(routes);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();