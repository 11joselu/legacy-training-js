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
  async send(email) {
    // If a proper SMTP server is configured, this line could be uncommented
    // await transporter.sendMail({
    //   from: email.getFrom(),
    //   to: email.getTo(),
    //   subject: email.getSubject(),
    //   html: email.getBody(),
    // });
  }
}

module.exports = NodeMailerSender;
