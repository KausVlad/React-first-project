import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as weatherStateReducer } from './weatherState/weatherState.slice';
import { authSlice } from './auth/auth.slice';
import { apiKeysSlice } from './apiKeys/apiKeys.slice';

const rootReducer = combineReducers({
  weatherState: weatherStateReducer,
  auth: authSlice.reducer,
  apiKeys: apiKeysSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
