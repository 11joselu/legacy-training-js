const Forecast = require('../src/forecast');
const fixtures = require('./fixtures');

describe('Forecast should', function () {
  it("retrieve today's weather", async () => {
    const forecast = new Forecast();
    forecast.getCityId = createMockForGetCityId();
    forecast.getCityWeatherData = createMockForGetCityWeatherData();

    const prediction = await forecast.predict('Madrid', null, false);

    expect(prediction).toBe('Clear');
  });

  it("retrieve today's Barcelona weather", async () => {
    const forecast = new Forecast();
    forecast.getCityId = createMockForGetCityId();
    forecast.getCityWeatherData = createMockForGetCityWeatherData();

    const prediction = await forecast.predict('Barcelona', null, false);

    expect(prediction).toBe('Heavy Cloud');
  });

  it("retrieve any day's weather", async () => {
    const forecast = new Forecast();
    forecast.getCityId = createMockForGetCityId();
    forecast.getCityWeatherData = createMockForGetCityWeatherData();
    let city = 'Madrid';
    let dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    const prediction = await forecast.predict(city, dayAfterTomorrow);

    expect(prediction).toBe('Light Cloud');
  });

  it('retrieve the wind of any day', async () => {
    let city = 'Madrid';
    const forecast = new Forecast();
    forecast.getCityId = createMockForGetCityId();
    forecast.getCityWeatherData = createMockForGetCityWeatherData();

    const prediction = await forecast.predict(city, null, true);

    expect(prediction).toBe(5.7766597588430235);
  });

  it('return empty string when requesting a forecast for more than 5 days', async () => {
    const forecast = new Forecast();
    forecast.getCityId = createMockForGetCityId;
    forecast.getCityWeatherData = createMockForGetCityWeatherData();
    let city = 'Madrid';
    let sixDaysForecast = new Date();
    sixDaysForecast.setDate(new Date().getDate() + 6);

    const prediction = await forecast.predict(city, sixDaysForecast);

    expect(prediction).toBe('');
  });
});

function createMockForGetCityId() {
  return jest.fn().mockImplementation((city, onSuccess) => {
    const error = null;
    const res = {};
    const body = city === 'Madrid' ? fixtures.MADRID_ID : fixtures.BARCELONA_ID;

    onSuccess(error, res, body);
  });
}

function createMockForGetCityWeatherData() {
  const MADRID_ID = fixtures.MADRID_ID[0].woeid;

  return jest.fn().mockImplementation((cityId, onSuccess) => {
    const error = null;
    const res = {};
    const body =
      cityId === MADRID_ID
        ? fixtures.MADRID_WEATHER
        : fixtures.BARCELONA_WEATHER;

    onSuccess(error, res, body);
  });
}
