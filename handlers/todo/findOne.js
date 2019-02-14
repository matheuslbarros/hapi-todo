
const todoRepository = require('../../repositories/todo');

module.exports = async (request, h) => {
  const { id } = request.params;

  return todoRepository.findOne(id).then(todo => {
    return h.response(todo);
  });
};
