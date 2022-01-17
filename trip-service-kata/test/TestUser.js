const User = require('../src/user');

class TestUser extends User {
  constructor(friends = []) {
    super();
    this.friends = friends;
  }

  getFriends() {
    return this.friends;
  }
}

module.exports = TestUser;
