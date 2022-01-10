class Email {
  constructor(from, to, subject, body) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  getSubject() {
    return this.subject;
  }

  getBody() {
    return this.body;
  }
}

module.exports = Email;
