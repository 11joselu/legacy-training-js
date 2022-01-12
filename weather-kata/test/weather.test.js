const Forecast = require('../src/forecast');
const fixtures = require('./fixtures');

describe('Forecast should', function () {
  let originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });

  it("retrieve today's weather", async () => {
    const forecast = new Forecast();
    const error = null;
    const res = {};
    forecast.getCityId = jest.fn().mockImplementation((city, onSuccess) => {
      const body = fixtures.MADRID_ID;

      onSuccess(error, res, body);
    });
    forecast.getCityWeatherData = jest
      .fn()
      .mockImplementation((cityId, onSuccess) => {
        const body = fixtures.MADRID_WEATHER;

        onSuccess(error, res, body);
      });

    const prediction = await forecast.predict('Madrid', null, false);

    expect(prediction).toBe('Clear');
  });

  it("retrieve today's Barcelona weather", async () => {
    const forecast = new Forecast();
    const error = null;
    const res = {};
    forecast.getCityId = jest.fn().mockImplementation((city, onSuccess) => {
      const body = fixtures.BARCELONA_ID;

      onSuccess(error, res, body);
    });
    forecast.getCityWeatherData = jest
      .fn()
      .mockImplementation((cityId, onSuccess) => {
        const body = fixtures.BARCELONA_WEATHER;

        onSuccess(error, res, body);
      });

    const prediction = await forecast.predict('Barcelona', null, false);

    expect(prediction).toBe('Heavy Cloud');
  });

  it("retrieve any day's weather", async () => {
    const forecast = new Forecast();
    let city = 'Madrid';
    let dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    const error = null;
    const res = {};
    forecast.getCityId = jest.fn().mockImplementation((city, onSuccess) => {
      const body = fixtures.MADRID_ID;

      onSuccess(error, res, body);
    });
    forecast.getCityWeatherData = jest
      .fn()
      .mockImplementation((cityId, onSuccess) => {
        const body = fixtures.MADRID_WEATHER;

        onSuccess(error, res, body);
      });

    const prediction = await forecast.predict(city, dayAfterTomorrow);

    expect(prediction).toBe('Light Cloud');
  });

  it('retrieve the wind of any day', async () => {
    const forecast = new Forecast();
    let city = 'Madrid';
    const error = null;
    const res = {};
    forecast.getCityId = jest.fn().mockImplementation((city, onSuccess) => {
      const body = fixtures.MADRID_ID;

      onSuccess(error, res, body);
    });
    forecast.getCityWeatherData = jest
      .fn()
      .mockImplementation((cityId, onSuccess) => {
        const body = fixtures.MADRID_WEATHER;

        onSuccess(error, res, body);
      });

    const prediction = await forecast.predict(city, null, true);

    expect(prediction).toBe(5.7766597588430235);
  });

  it.skip('return empty string when requesting a forecast for more than 5 days', async () => {
    const forecast = new Forecast();
    let city = 'Madrid';
    let sixDaysForecast = new Date();
    sixDaysForecast.setDate(new Date().getDate() + 6);

    const prediction = await forecast.predict(city, sixDaysForecast);

    expect(prediction).toBe('');
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
