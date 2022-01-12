const MADRID_ID = [
  {
    title: 'Madrid',
    location_type: 'City',
    woeid: 766273,
    latt_long: '40.420300,-3.705770',
  },
];

const MADRID_WEATHER = {
  consolidated_weather: [
    {
      id: 4972390552436736,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NNE',
      created: '2022-01-11T16:15:55.472581Z',
      applicable_date: '2022-01-11',
      min_temp: 4.5,
      max_temp: 15.705,
      the_temp: 13.32,
      wind_speed: 3.239405882502187,
      wind_direction: 19.521840298994157,
      air_pressure: 1025.5,
      humidity: 66,
      visibility: 15.192836335798933,
      predictability: 68,
    },
    {
      id: 6684962557263872,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NE',
      created: '2022-01-11T16:15:58.210564Z',
      applicable_date: '2022-01-12',
      min_temp: 2.925,
      max_temp: 12.225000000000001,
      the_temp: 10.245,
      wind_speed: 5.7766597588430235,
      wind_direction: 49.983129180841516,
      air_pressure: 1029.5,
      humidity: 44,
      visibility: 16.287692376521115,
      predictability: 68,
    },
    {
      id: 6450463953125376,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'ENE',
      created: '2022-01-11T16:16:01.760400Z',
      applicable_date: '2022-01-13',
      min_temp: 1.0150000000000001,
      max_temp: 10.34,
      the_temp: 8.24,
      wind_speed: 3.3240291374930404,
      wind_direction: 70.78673578929839,
      air_pressure: 1034.5,
      humidity: 59,
      visibility: 15.215827069911715,
      predictability: 70,
    },
    {
      id: 6098290459279360,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'ENE',
      created: '2022-01-11T16:16:04.569044Z',
      applicable_date: '2022-01-14',
      min_temp: 0.85,
      max_temp: 9.875,
      the_temp: 7.895,
      wind_speed: 3.8473069244306584,
      wind_direction: 57.49348360105223,
      air_pressure: 1034,
      humidity: 58,
      visibility: 14.118174858824466,
      predictability: 70,
    },
    {
      id: 6712690866126848,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'E',
      created: '2022-01-11T16:16:07.183883Z',
      applicable_date: '2022-01-15',
      min_temp: 1.98,
      max_temp: 9.684999999999999,
      the_temp: 7.875,
      wind_speed: 2.3238394184230757,
      wind_direction: 95.64241910027232,
      air_pressure: 1028,
      humidity: 53,
      visibility: 15.883179730374613,
      predictability: 68,
    },
    {
      id: 5603496402354176,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'WNW',
      created: '2022-01-11T16:16:10.255012Z',
      applicable_date: '2022-01-16',
      min_temp: 0.675,
      max_temp: 9.3,
      the_temp: 6.78,
      wind_speed: 2.338653463771574,
      wind_direction: 298.5,
      air_pressure: 1025,
      humidity: 56,
      visibility: 9.999726596675416,
      predictability: 68,
    },
  ],
  time: '2022-01-11T17:39:30.771877+01:00',
  sun_rise: '2022-01-11T08:37:17.410700+01:00',
  sun_set: '2022-01-11T18:08:27.534817+01:00',
  timezone_name: 'LMT',
  parent: {
    title: 'Spain',
    location_type: 'Country',
    woeid: 23424950,
    latt_long: '39.894890,-2.988310',
  },
  sources: [
    {
      title: 'BBC',
      slug: 'bbc',
      url: 'http://www.bbc.co.uk/weather/',
      crawl_rate: 360,
    },
    {
      title: 'Forecast.io',
      slug: 'forecast-io',
      url: 'http://forecast.io/',
      crawl_rate: 480,
    },
    {
      title: 'HAMweather',
      slug: 'hamweather',
      url: 'http://www.hamweather.com/',
      crawl_rate: 360,
    },
    {
      title: 'Met Office',
      slug: 'met-office',
      url: 'http://www.metoffice.gov.uk/',
      crawl_rate: 180,
    },
    {
      title: 'OpenWeatherMap',
      slug: 'openweathermap',
      url: 'http://openweathermap.org/',
      crawl_rate: 360,
    },
    {
      title: 'Weather Underground',
      slug: 'wunderground',
      url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
      crawl_rate: 720,
    },
    {
      title: 'World Weather Online',
      slug: 'world-weather-online',
      url: 'http://www.worldweatheronline.com/',
      crawl_rate: 360,
    },
  ],
  title: 'Madrid',
  location_type: 'City',
  woeid: 766273,
  latt_long: '40.420300,-3.705770',
  timezone: 'Europe/Madrid',
};

const BARCELONA_ID = [
  {
    title: 'Barcelona',
    location_type: 'City',
    woeid: 753692,
    latt_long: '41.385578,2.168740',
  },
];

const BARCELONA_WEATHER = {
  consolidated_weather: [
    {
      id: 5340741174820864,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'E',
      created: '2022-01-12T13:31:40.569587Z',
      applicable_date: '2022-01-12',
      min_temp: 7.875,
      max_temp: 11.870000000000001,
      the_temp: 10.45,
      wind_speed: 4.464217534412366,
      wind_direction: 89.7138731178214,
      air_pressure: 1030,
      humidity: 73,
      visibility: 13.163127336355682,
      predictability: 71,
    },
    {
      id: 5810629723029504,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NNW',
      created: '2022-01-12T13:31:43.484627Z',
      applicable_date: '2022-01-13',
      min_temp: 5.75,
      max_temp: 11.91,
      the_temp: 10.85,
      wind_speed: 3.585755006993823,
      wind_direction: 345.04280944004495,
      air_pressure: 1035,
      humidity: 54,
      visibility: 15.032211882605583,
      predictability: 68,
    },
    {
      id: 5542660002545664,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'WNW',
      created: '2022-01-12T13:31:46.542913Z',
      applicable_date: '2022-01-14',
      min_temp: 5.74,
      max_temp: 13.155,
      the_temp: 11.93,
      wind_speed: 4.066943504159707,
      wind_direction: 292.3524340849279,
      air_pressure: 1033.5,
      humidity: 43,
      visibility: 15.018541716376362,
      predictability: 68,
    },
    {
      id: 5490092958285824,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'WNW',
      created: '2022-01-12T13:31:49.544481Z',
      applicable_date: '2022-01-15',
      min_temp: 6.109999999999999,
      max_temp: 12.455,
      the_temp: 12.04,
      wind_speed: 4.021964545841619,
      wind_direction: 295.49054400741545,
      air_pressure: 1027,
      humidity: 43,
      visibility: 15.425229161695697,
      predictability: 70,
    },
    {
      id: 6668559909388288,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'W',
      created: '2022-01-12T13:31:52.560440Z',
      applicable_date: '2022-01-16',
      min_temp: 6.154999999999999,
      max_temp: 12.575,
      the_temp: 11.965,
      wind_speed: 3.7352054937776717,
      wind_direction: 278.08713416716967,
      air_pressure: 1027,
      humidity: 47,
      visibility: 15.62033971605822,
      predictability: 68,
    },
    {
      id: 6024774846251008,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'WNW',
      created: '2022-01-12T13:31:55.572147Z',
      applicable_date: '2022-01-17',
      min_temp: 4.005,
      max_temp: 12.7,
      the_temp: 11.2,
      wind_speed: 4.126812813171081,
      wind_direction: 285,
      air_pressure: 1026,
      humidity: 44,
      visibility: 9.999726596675416,
      predictability: 68,
    },
  ],
  time: '2022-01-12T15:01:15.266482+01:00',
  sun_rise: '2022-01-12T08:16:17.015207+01:00',
  sun_set: '2022-01-12T17:43:15.144640+01:00',
  timezone_name: 'LMT',
  parent: {
    title: 'Spain',
    location_type: 'Country',
    woeid: 23424950,
    latt_long: '39.894890,-2.988310',
  },
  sources: [
    {
      title: 'BBC',
      slug: 'bbc',
      url: 'http://www.bbc.co.uk/weather/',
      crawl_rate: 360,
    },
    {
      title: 'Forecast.io',
      slug: 'forecast-io',
      url: 'http://forecast.io/',
      crawl_rate: 480,
    },
    {
      title: 'Met Office',
      slug: 'met-office',
      url: 'http://www.metoffice.gov.uk/',
      crawl_rate: 180,
    },
    {
      title: 'OpenWeatherMap',
      slug: 'openweathermap',
      url: 'http://openweathermap.org/',
      crawl_rate: 360,
    },
    {
      title: 'Weather Underground',
      slug: 'wunderground',
      url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
      crawl_rate: 720,
    },
    {
      title: 'World Weather Online',
      slug: 'world-weather-online',
      url: 'http://www.worldweatheronline.com/',
      crawl_rate: 360,
    },
  ],
  title: 'Barcelona',
  location_type: 'City',
  woeid: 753692,
  latt_long: '41.385578,2.168740',
  timezone: 'Europe/Madrid',
};

module.exports = {
  MADRID_ID,
  MADRID_WEATHER,
  BARCELONA_ID,
  BARCELONA_WEATHER,
};
