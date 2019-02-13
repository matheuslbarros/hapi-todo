const joi = require('joi');

const helloGetQuery = joi.object({
  name: joi.string().required(),
});

const helloGet200 = joi.object({
  message: joi.string(),
});

module.exports = {
  helloGetQuery,
  helloGet200,
};
