class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ForbiddenError extends MyError {
  constructor(message) {
    super(`Você não é o autor ${message}`);
  }
}
class NotFoundError extends MyError {
  constructor(property, message = "") {
    super(`${property} não encontrado(a) ${message}`);
  }
}
class UnauthorizedError extends MyError {
  constructor() {
    super("faça login antes!");
  }
}

class ValidationError extends MyError {}

class FieldRequiredError extends ValidationError {
  constructor(field) {
    super(`${field} é um campo obrigatório`);
  }
}

class AlreadyTakenError extends ValidationError {
  constructor(property, message = "") {
    super(`${property} já existe ${message}`);
  }
}

module.exports = {
  AlreadyTakenError,
  FieldRequiredError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
};
