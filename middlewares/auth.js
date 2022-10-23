require('dotenv').config();
const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/NotAuthError');
const { JWT_SECRET_DEV } = require('../constants/configConstants');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new NotAuthError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : JWT_SECRET_DEV);
  } catch (err) {
    throw new NotAuthError('Необходима авторизация');
  }

  req.user = payload;

  next();
  return null;
};
