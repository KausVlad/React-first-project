import { createSlice } from '@reduxjs/toolkit';

export const weatherStateSlice = createSlice({
  name: 'weather',
  initialState: {
    coordinate: {},
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
    },
    resetCoordinate: (state) => {
      state.coordinate = {};
    },
  },
});

export const {
  actions: { setWeather, setCoordinate, resetCoordinate },
  reducer,
} = weatherStateSlice;
