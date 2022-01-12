let TripService = require('../src/trip_service');
const User = require('../src/user');

describe('TripService', () => {
  it('Should throw error when user is not logged in', () => {
    const tripService = new TripService();
    tripService.getUserSession = jest.fn(() => null);

    const user = new User();

    expect(() => {
      tripService.getTripsByUser(user);
    }).toThrowError('User not logged in.');
  });

  describe('When user is logged in', () => {
    it('And does not has friend. Should return empty trip list', () => {
      const sessionUser = new TestUser();
      const user = new TestUser();
      const tripService = new TripService();
      tripService.getUserSession = jest.fn(() => sessionUser);

      const tripList = tripService.getTripsByUser(user);

      expect(tripList).toEqual([]);
    });

    it('And has friends. Should search for friend list', () => {
      const sessionUser = new TestUser([]);
      const friends = [sessionUser];
      const user = new TestUser(friends);
      const tripDAO = {
        findTripsByUser: jest.fn(() => []),
      };
      const tripService = new TripService(tripDAO);

      tripService.getUserSession = jest.fn(() => sessionUser);

      const tripList = tripService.getTripsByUser(user);

      expect(tripDAO.findTripsByUser).toHaveBeenCalledWith(user);
      expect(tripList).toEqual([]);
    });

    it('And has friends. Should search for friend list and return it', () => {
      const foundFriend = new TestUser([]);
      const sessionUser = new TestUser([]);
      const friends = [sessionUser];
      const user = new TestUser(friends);
      const tripDAO = {
        findTripsByUser: jest.fn(() => [foundFriend]),
      };
      const tripService = new TripService(tripDAO);

      tripService.getUserSession = jest.fn(() => sessionUser);

      const tripList = tripService.getTripsByUser(user);

      expect(tripDAO.findTripsByUser).toHaveBeenCalledWith(user);
      expect(tripList).toEqual([foundFriend]);
    });
  });
});

class TestUser extends User {
  constructor(friends = []) {
    super();
    this.friends = friends;
  }

  getFriends() {
    return this.friends;
  }
}
