const rateLimit = require('express-rate-limit');

const DB_ADDRESS_DEV = 'mongodb://localhost:27017/moviesdb';

const JWT_SECRET_DEV = 'super-strong-secret';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = { DB_ADDRESS_DEV, JWT_SECRET_DEV, limiter };
