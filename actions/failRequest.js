
module.exports = (request, h, error) => {
  console.error('on.request.fail', error.message);

  throw error;
};
