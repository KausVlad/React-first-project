import { createSlice } from '@reduxjs/toolkit';
import { testFetch } from './auth.actions';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: null,
    error: null,
    testU: null,
  },
  reducers: {},
  extraReducers: {
    [testFetch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [testFetch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.testU = action.payload;
      state.error = null;
    },
    [testFetch.rejected]: (state, action) => {
      state.testU = null;
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});
