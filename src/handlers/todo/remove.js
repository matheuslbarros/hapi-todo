
const todoRepository = require('../../repositories/todo');

module.exports = async (request, h) => {
  const { id } = request.params;

  return todoRepository.remove(id).then(() => {
    return h.response().code(204);
  });
};
