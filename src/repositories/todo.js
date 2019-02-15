const uuidv1 = require('uuid/v1');
const boom = require('boom');

const todos = [];

const find = async () => {
  return Promise.resolve(todos);
};

const findOne = async (id) => {
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    throw boom.notFound('Todo not found');
  }

  return Promise.resolve(todo);
};

const create = async (data) => {
  data.id = uuidv1();
  data.created_at = new Date();
  todos.push(data);

  return Promise.resolve(data);
};

const update = async (data) => {
  const { id } = data;

  return findOne(id).then((todo) => {
    todo.title = data.title;
    todo.description = data.description;
    todo.done = data.done;
    todo.updated_at = new Date();

    return todo;
  });
};

const remove = async (id) => {
  return findOne(id).then((todo) => {
    todos.splice(todos.indexOf(todo), 1);
  });
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};
