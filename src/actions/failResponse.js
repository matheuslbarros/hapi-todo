
module.exports = (request, h, error) => {
  request.server.log(['error', 'response'], error);

  throw error;
};
