const { Router } = require('express');
const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
const User = require("./user");
const UserOrmRepository = require("./user_orm_repository");
const userRepository = new UserOrmRepository();
const MAX_USER_ID = 99999;

const router = Router();

router.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length <= 8 || !password.includes("_")) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The password is not valid!");
  }
  if (userRepository.findByEmail(email) !== undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The email is already in use");
  }

  const user = new User(generateUserId(), name, email, password);
  userRepository.save(user);

  //Send a confirmation email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 465,
    auth: {
      user: "[USERNAME]",
      pass: "[PASSWORD]",
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

  return res.status(StatusCodes.CREATED).json({ user });
});

function generateUserId() {
  return Math.floor(Math.random() * Math.floor(MAX_USER_ID));
}

module.exports = router;
