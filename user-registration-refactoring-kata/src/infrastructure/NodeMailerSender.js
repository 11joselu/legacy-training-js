const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.email',
  port: 465,
  auth: {
    user: '[USERNAME]',
    pass: '[PASSWORD]',
  },
});

class NodeMailerSender {
  async send() {
    // If a proper SMTP server is configured, this line could be uncommented
    /**
   await transporter.sendMail({
    from: "noreply@codium.team",
    to: email,
    subject: "Welcome to Codium",
    html: "<h1>This is the confirmation email</h1>",
  });
   */
  }
}

module.exports = NodeMailerSender;
