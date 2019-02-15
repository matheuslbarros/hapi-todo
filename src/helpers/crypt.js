const bcrypt = require('bcrypt');

const hash = (data) => {
  return bcrypt.hashSync(data, bcrypt.genSaltSync(1));
};

const compare = (data, encrypted) => {
  return bcrypt.compare(data, encrypted);
};

module.exports = {
  hash,
  compare,
};
