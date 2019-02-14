
const helloRoutes = require('../routes/hello');
const todoRoutes = require('../routes/todo');

const name = 'routes';

const register = (server) => {
  server.route(helloRoutes);
  server.route(todoRoutes);
};

module.exports = {
  name,
  register,
};
