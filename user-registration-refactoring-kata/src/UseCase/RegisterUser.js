const orm = require('../user_orm_repository');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');
const PasswordIsNotValidException = require('../model/PasswordIsNotValidException');
const EmailIsAlreadyInUse = require('../model/EmailIsAlreadyInUse');
const User = require('../model/User');

class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(name, email, password) {
    if (password.length <= 8 || !password.includes('_')) {
      throw new PasswordIsNotValidException();
    }

    if (this.userRepository.findByEmail(email) !== undefined) {
      throw new EmailIsAlreadyInUse();
    }

    const user = new User(name, email, password);

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
