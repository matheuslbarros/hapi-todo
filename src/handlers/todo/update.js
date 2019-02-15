
const todoRepository = require('../../repositories/todo');

module.exports = async (request, h) => {
  const { id } = request.params;
  const { title, description, done } = request.payload;

  const data = {
    id,
    title,
    description,
    done,
  };

  return todoRepository.update(data).then((todo) => {
    return h.response(todo);
  });
};
