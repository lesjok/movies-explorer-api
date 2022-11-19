const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://explorer-movies.04.pe/',
  'https://explorer-movies.04.pe/',
  'explorer-movies.04.pe',
];

module.exports = { allowedCors, DEFAULT_ALLOWED_METHODS };
