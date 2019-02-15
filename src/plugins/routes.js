
const homeRoutes = require('../routes/home');
const authRoutes = require('../routes/auth');
const todoRoutes = require('../routes/todo');

const register = (server) => {
  server.route(homeRoutes);
  server.route(authRoutes);
  server.route(todoRoutes);

  server.table().forEach((route) => {
    server.log(['INFO'], `${route.method.toUpperCase()} ${route.path}`);
  });
};

module.exports = {
  name: 'routes',
  register,
};
