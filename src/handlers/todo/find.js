
const todoRepository = require('../../repositories/todo');

module.exports = async (request, h) => {
  return todoRepository
    .find()
    .then((todos) => {
      return h.response(todos);
    });
};
