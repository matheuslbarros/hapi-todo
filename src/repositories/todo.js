const uuidv1 = require('uuid/v1');
const boom = require('boom');

const todos = [];

const find = async () => {
  return Promise.resolve(todos);
};

const findOne = async (id) => {
  const todo = todos.find((t) => {
    return t.id === id;
  });

  if (!todo) {
    throw boom.notFound('Todo not found');
  }

  return Promise.resolve(todo);
};

const create = async (data) => {
  const { title, description } = data;

  const todo = {
    id: uuidv1(),
    title,
    description,
    created_at: new Date(),
  };

  todos.push(todo);

  return Promise.resolve(todo);
};

const update = async (data) => {
  const {
    id,
    title,
    description,
    done,
  } = data;

  return findOne(id).then((todo) => {
    todo.title = title; // eslint-disable-line
    todo.description = description; // eslint-disable-line
    todo.done = done; // eslint-disable-line
    todo.updated_at = new Date(); // eslint-disable-line

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
