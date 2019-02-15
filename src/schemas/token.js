const joi = require('joi');

const tokenGetHeaders = joi.object({
  authorization: joi.string().required().default('Basic YWRtaW46cGFzc3dvcmQ=').description('Authorization token'),
}).unknown();

const tokenGetResponse = joi.object({
  type: joi.string().description('Type'),
  token: joi.string().description('Token'),
});

module.exports = {
  tokenGetHeaders,
  tokenGetResponse,
};
