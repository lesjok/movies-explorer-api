const STATUS_CODE = require('./errorCodes');

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODE.notFound;
    this.name = this.constructor.name;
  }
}

module.exports = NotFound;
