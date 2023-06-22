import { createSlice } from '@reduxjs/toolkit';

const coordinate =
  localStorage.getItem('COORDINATE1337') !== null
    ? JSON.parse(localStorage.getItem('COORDINATE1337'))
    : {};

const cityNameFull =
  localStorage.getItem('CITY_NAME1337') !== null
    ? JSON.parse(localStorage.getItem('CITY_NAME1337'))
    : '';

export const weatherStateSlice = createSlice({
  name: 'weather',
  initialState: {
    cityNameFull: cityNameFull,
    coordinate: coordinate,
    currentWeather: null,
    forecastWeather: null,
  },
  reducers: {
    setWeather: (state, action) => {
      state.currentWeather = action.payload[0];
      state.forecastWeather = action.payload[1];
    },

    setCoordinate: (state, action) => {
      const { lat, lon } = action.payload;
      state.coordinate = { lat, lon };

      localStorage.setItem('COORDINATE1337', JSON.stringify(state.coordinate));
    },

    setCityName: (state, action) => {
      const cityNameRaw = action.payload;
      state.cityNameFull = `${cityNameRaw.name}, ${
        cityNameRaw.state ? `${cityNameRaw.state}, ` : ''
      } ${cityNameRaw.country}`;

      localStorage.setItem('CITY_NAME1337', JSON.stringify(state.cityNameFull));
    },

    resetCityName: (state) => {
      state.cityNameFull = '';

      localStorage.setItem('CITY_NAME1337', JSON.stringify(state.cityNameFull));
    },

    resetCoordinate: (state) => {
      state.coordinate = {};

      localStorage.setItem('COORDINATE1337', JSON.stringify(state.coordinate));
    },
  },
});

export const {
  actions: {
    setWeather,
    setCoordinate,
    setCityName,
    resetCoordinate,
    resetCityName,
  },
  reducer,
} = weatherStateSlice;
