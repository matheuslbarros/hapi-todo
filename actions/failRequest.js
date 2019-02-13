
module.exports = (request, h, error) => {
  console.log('on.request.fail', error);

  throw error;
};
