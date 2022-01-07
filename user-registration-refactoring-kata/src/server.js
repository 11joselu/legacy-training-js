const express = require('express');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./RegisterUser');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  const registerUser = new RegisterUser();
  return registerUser.execute(req, res);
});

module.exports = server;
