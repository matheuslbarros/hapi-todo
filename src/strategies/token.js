const boom = require('boom');
const { verify } = require('../helpers/token');

const scheme = () => {
  return {
    authenticate: (request, h) => {
      const credentials = {};

      const { 'x-access-token': authorization } = request.headers;

      try {
        credentials.user = verify(authorization);
      } catch (e) {
        return h.unauthenticated(boom.unauthorized('Unauthorized'), { credentials });
      }

      return h.authenticated({ credentials });
    },
  };
};

module.exports = {
  name: 'token',
  scheme: {
    name: 'jwt',
    scheme,
  },
};
