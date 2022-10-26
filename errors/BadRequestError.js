const STATUS_CODE = require('./errorCodes');

class BadRequestError extends Error {
  constructor(message = 'Переданы некорректные данные.') {
    super(message);
    this.statusCode = STATUS_CODE.dataError;
  }
}

module.exports = BadRequestError;
