
module.exports = (request, h, error) => {
  console.log('on.response.fail', error);

  throw error;
};
