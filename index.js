const server = require('./server');

try {
  server.run();
} catch (error) {
  console.error(error);
  process.exit(1);
}

module.exports = server;