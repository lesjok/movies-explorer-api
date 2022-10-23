const rateLimit = require('express-rate-limit');

const DB_ADDRESS = 'mongodb://localhost:27017/bitfilmsdb';

const JWT_SECRET_DEV = 'super-strong-secret';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = { DB_ADDRESS, JWT_SECRET_DEV, limiter };
