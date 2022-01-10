const orm = require('../user_orm_repository');
const { StatusCodes } = require('http-status-codes');
const PasswordIsNotValidException = require('../model/PasswordIsNotValidException');
const EmailIsAlreadyInUse = require('../model/EmailIsAlreadyInUse');
const User = require('../model/User');
const Password = require('../model/Password');

class RegisterUser {
  constructor(userRepository, emailSender) {
    this.userRepository = userRepository;
    this.emailSender = emailSender;
  }

  async execute(name, email, userPassword) {
    const password = new Password(userPassword);

    if (this.userRepository.findByEmail(email) !== undefined) {
      throw new EmailIsAlreadyInUse();
    }

    const user = new User(name, email, password.value());

    this.userRepository.save(user);

    await this.emailSender.send({
      from: 'noreply@codium.team',
      to: email,
      subject: 'Welcome to Codium',
      html: '<h1>This is the confirmation email</h1>',
    });

    return user;
  }
}

module.exports = RegisterUser;
