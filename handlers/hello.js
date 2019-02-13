
module.exports = (request, h) => {
  const { name } = request.query;

  return {
    message: 'hello ' + name,
  };
};
