const orm = require('../user_orm_repository');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');
const PasswordIsNotValidException = require('../model/PasswordIsNotValidException');
const EmailIsAlreadyInUse = require('../model/EmailIsAlreadyInUse');
const User = require('../model/User');
const Password = require('../model/Password');

class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(name, email, userPassword) {
    const password = new Password(userPassword);

    if (this.userRepository.findByEmail(email) !== undefined) {
      throw new EmailIsAlreadyInUse();
    }

    const user = new User(name, email, password.value());

    this.userRepository.save(user);

    //Send a confirmation email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.email',
      port: 465,
      auth: {
        user: '[USERNAME]',
        pass: '[PASSWORD]',
      },
    });
    // If a proper SMTP server is configured, this line could be uncommented
    /**
   await transporter.sendMail({
    from: "noreply@codium.team",
    to: email,
    subject: "Welcome to Codium",
    html: "<h1>This is the confirmation email</h1>",
  });
   */

    return user;
  }
}

module.exports = RegisterUser;
