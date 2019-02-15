const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config');

const sign = (data) => {
  return jsonwebtoken.sign(data, config.token.secret_key);
};

const verify = (data) => {
  return jsonwebtoken.verify(data, config.token.secret_key);
};

module.exports = {
  sign,
  verify,
};
