const express = require('express');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./UseCase/RegisterUser');
const PasswordIsNotValidException = require('./model/PasswordIsNotValidException');
const EmailIsAlreadyInUse = require('./model/EmailIsAlreadyInUse');
const ORMUserRepository = require('./infrastructure/ORMUserRepository');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;

  const userRepository = new ORMUserRepository();
  const registerUser = new RegisterUser(userRepository);
  try {
    const user = registerUser.execute(password, email, name);
    return res.status(StatusCodes.CREATED).json({ user });
  } catch (e) {
    if (e instanceof PasswordIsNotValidException) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json('The password is not valid!');
    }

    if (e instanceof EmailIsAlreadyInUse) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json('The email is already in use');
    }
  }
});

module.exports = server;
