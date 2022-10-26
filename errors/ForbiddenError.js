const STATUS_CODE = require('./errorCodes');

class ForbiddenError extends Error {
  constructor(message = 'Доступ запрещен.') {
    super(message);
    this.statusCode = STATUS_CODE.forbiddenError;
  }
}

module.exports = ForbiddenError;
