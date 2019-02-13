
const helloRoutes = require('../routes/hello');

const name = 'routes';

const register = (server) => {
  server.route(helloRoutes);
};

module.exports = {
  name,
  register,
};
