class User {
  constructor(name, email, password) {
    this.id = Math.floor(Math.random() * 99999);
    this.email = email;
    this.name = name;
    this.password = password;
  }
}

module.exports = User;
