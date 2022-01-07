const express = require('express');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./RegisterUser');
const PasswordIsNotValidException = require('./PasswordIsNotValidException');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  const registerUser = new RegisterUser();
  try {
    return registerUser.execute(req, res);
  } catch (e) {
    if (e instanceof PasswordIsNotValidException) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json('The password is not valid!');
    }
  }
});

module.exports = server;
