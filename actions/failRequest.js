
module.exports = (request, h, error) => {
  request.server.log(['error', 'request'], error);

  throw error;
};
