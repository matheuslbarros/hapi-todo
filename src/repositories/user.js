const { hash } = require('../helpers/crypt');

const users = [
  {
    id: 'c4d63960-2fc4-11e9-921f-ff47c0def688',
    name: 'Administrator',
    email: 'admin@gmail.com',
    username: 'admin',
    password: hash('password'),
    scope: ['admin'],
  },
];

const findByUsername = (username) => {
  const user = users.find((u) => {
    return u.username === username;
  });

  return Promise.resolve(user);
};

module.exports = {
  findByUsername,
};
