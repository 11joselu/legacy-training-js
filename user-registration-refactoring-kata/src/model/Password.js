const PasswordIsNotValidException = require('./PasswordIsNotValidException');

class Password {
  constructor(password) {
    this.validate(password);

    this.password = password;
  }

  validate(password) {
    if (password.length <= 8 || !password.includes('_')) {
      throw new PasswordIsNotValidException();
    }
  }

  // Talk about test. Bause validadate that password is string instead of object. We need change it?.
  value() {
    return this.password;
  }
}

module.exports = Password;
