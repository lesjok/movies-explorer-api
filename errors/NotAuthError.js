const STATUS_CODE = require('./errorCodes');

class NotAuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODE.unauthorized;
    this.name = this.constructor.name;
  }
}

module.exports = NotAuthError;
