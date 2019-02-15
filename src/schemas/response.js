const joi = require('joi');

const unauthorized = joi.object({
  statusCode: joi.number().integer().description('Status code'),
  error: joi.string().description('Error name'),
  message: joi.string().description('Error message'),
}).unknown();

const internalServerError = joi.object({
  statusCode: joi.number().integer().description('Status code'),
  error: joi.string().description('Error name'),
  message: joi.string().description('Error message'),
}).unknown();

module.exports = {
  unauthorized,
  internalServerError,
};
