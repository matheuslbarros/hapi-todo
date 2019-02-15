
const todoRepository = require('../../repositories/todo');

module.exports = async (request, h) => {
  const { title, description } = request.payload;

  const data = {
    title,
    description,
    done: false,
  };

  return todoRepository.create(data).then(todo => {
    return h.response(todo).code(201);
  })
};
