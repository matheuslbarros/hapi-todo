const packageInfo = require('../../package');

module.exports = (request, h) => {
  return h.response({
    name: packageInfo.name,
    description: packageInfo.description,
    version: packageInfo.version,
    author: packageInfo.author,
  });
};
