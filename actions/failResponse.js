
module.exports = (request, h, error) => {
  console.error('on.response.fail', error.message);

  throw error;
};
