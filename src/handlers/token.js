
module.exports = (request, h) => {
  const { type, token } = request.auth.credentials;

  return h.response({
    type,
    token,
  });
};
