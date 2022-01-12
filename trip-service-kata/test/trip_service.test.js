let TripService = require('../src/trip_service');
const User = require('../src/user');

describe('TripService', () => {
  it.skip('Should throw error when user is not logged in', () => {
    const tripService = new TripService();
    const user = new User();
    expect(() => {
      tripService.getTripsByUser(user);
    }).toThrowError('User not logged in.');
  });
});
