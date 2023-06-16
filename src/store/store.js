import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as weatherStateReducer } from './weatherState/weatherState.slice';

const rootReducer = combineReducers({
  weatherState: weatherStateReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
