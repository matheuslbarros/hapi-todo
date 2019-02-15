const joi = require('joi');

const todoId = joi.string().guid();

const todoSchema = joi.object({
  id: todoId,
  title: joi.string().required(),
  description: joi.string().required(),
  done: joi.boolean(),
  created_at: joi.date(),
  updated_at: joi.date(),
});

const todoListSchema = joi.array().items(todoSchema);

const todoCreate = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  done: joi.boolean(),
});

const todoUpdate = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  done: joi.boolean(),
});

module.exports = {
  todoId,
  todoSchema,
  todoListSchema,
  todoCreate,
  todoUpdate,
};
