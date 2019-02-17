const bcrypt = require('bcryptjs');

const hash = (data) => {
  return bcrypt.hashSync(data, bcrypt.genSaltSync(1));
};

const compare = (data, encrypted) => {
  return bcrypt.compareSync(data, encrypted);
};

module.exports = {
  hash,
  compare,
};
