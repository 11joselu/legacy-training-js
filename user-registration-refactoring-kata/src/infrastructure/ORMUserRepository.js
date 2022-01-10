const orm = require('../user_orm_repository');

class ORMUserRepository {
  findByEmail(email) {
    return orm.findByEmail(email);
  }

  save(user) {
    orm.save(user);
  }
}

module.exports = ORMUserRepository;
