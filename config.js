
module.exports = {
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 9000,
  },
  token: {
    secret_key: process.env.SECRET_KEY || '84ee498d-6b84-468c-b4c6-f0af7408303c',
  },
};
