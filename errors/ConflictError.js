const STATUS_CODE = require('./errorCodes');

class ConflictError extends Error {
  constructor(message = 'Пользователь с указанными данными уже зарегистрирован.') {
    super(message);
    this.statusCode = STATUS_CODE.conflictError;
  }
}

module.exports = ConflictError;
