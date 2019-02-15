
const homeHandler = require('../handlers/home');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: homeHandler,
    options: {
      auth: false,
      description: 'Home',
      tags: ['api', 'home'],
    },
  },
];
