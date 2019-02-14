const server = require('./server');

server.events.on('log', (event) => {
  if (event.error) {
    console.error(`[ERROR][${event.timestamp}]: ${event.error.message}`, event);
  } else {
    console.log(`[INFO][${event.timestamp}]: ${event.data}`, event);
  }
});

try {
  server.run();
} catch (error) {
  console.error(error);
  process.exit(1);
}

module.exports = server;