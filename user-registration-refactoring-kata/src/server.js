const express = require('express');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./RegisterUser');
const PasswordIsNotValidException = require('./PasswordIsNotValidException');
const EmailIsAlreadyInUse = require('./EmailIsAlreadyInUse');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  const registerUser = new RegisterUser();
  try {
    const user = registerUser.execute(req);
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
