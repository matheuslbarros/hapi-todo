
module.exports = (request, h) => {
  const { name } = request.query;

  return h.response({
    message: `hello ${name}`,
  });
};
