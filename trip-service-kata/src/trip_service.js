'use strict';

let UserSession = require('./user_session');
let TripDAO = require('./trip_dao');

class TripService {
  constructor(tripDAO) {
    this.tripDAO = tripDAO || TripDAO;
  }

  getTripsByUser(user) {
    let tripList = [];
    let loggedUser = this.getUserSession();
    let isFriend = false;
    if (loggedUser != null) {
      let friends = user.getFriends();
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friend == loggedUser) {
          isFriend = true;
          break;
        }
      }
      if (isFriend) {
        tripList = this.tripDAO.findTripsByUser(user);
      }
      return tripList;
    } else {
      throw new Error('User not logged in.');
    }
  }

  getUserSession() {
    return UserSession.getLoggedUser();
  }
}

module.exports = TripService;
