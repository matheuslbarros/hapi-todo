const joi = require('joi');

const badRequest = joi.object({
  statusCode: joi.number().integer().default(400).description('Status code'),
  error: joi.string().default('Bad Request').description('Error name'),
  message: joi.string().description('Error message'),
}).unknown();

const unauthorized = joi.object({
  statusCode: joi.number().integer().default(401).description('Status code'),
  error: joi.string().default('Unauthorized').description('Error name'),
  message: joi.string().description('Error message'),
}).unknown();

const internalServerError = joi.object({
  statusCode: joi.number().integer().default(500).description('Status code'),
  error: joi.string().default('Internal Server Error').description('Error name'),
  message: joi.string().description('Error message'),
}).unknown();

module.exports = {
  badRequest,
  unauthorized,
  internalServerError,
};
