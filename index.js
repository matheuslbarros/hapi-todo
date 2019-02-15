const server = require('./src/server');

server.events.on('log', (event) => {
  if (event.error) {
    console.error(`[${event.channel}][${event.timestamp}]: ${event.error.message}`, event);
  } else {
    console.log(`[${event.channel}][${event.timestamp}]: ${JSON.stringify(event.data)}`);
  }
});

try {
  server.run();
} catch (error) {
  console.error(error);
  process.exit(1);
}

module.exports = server;
