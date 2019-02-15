const userRepository = require('../repositories/user');

const { sign } = require('../helpers/token');
const { compare } = require('../helpers/crypt');

const validate = async (request, username, password) => {
  const user = await userRepository.findByUsername(username);

  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = await compare(password, user.password);
  const credentials = {
    user,
    type: 'jwt',
    token: sign(user),
  };

  return {
    isValid,
    credentials,
  };
};

module.exports = {
  name: 'simple',
  scheme: 'basic',
  options: {
    validate,
  },
};
