import { createSlice } from '@reduxjs/toolkit';
import { testFetch, reg, login, logout, checkAuth } from './auth.actions';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: '',
    error: null,
    testU: null,
    isLoading: false,
    isAuth: false,
    userName: '',
  },
  reducers: {},
  extraReducers: {
    [testFetch.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
      state.error = '';
    },
    [testFetch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isLoading = false;
      state.testU = action.payload;
      state.error = '';
    },
    [testFetch.rejected]: (state, action) => {
      state.testU = null;
      state.isLoading = false;
      state.status = 'rejected';
      state.error = action.payload;
    },
    [reg.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
      state.error = '';
    },
    [reg.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isLoading = false;
      state.userName = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    [reg.rejected]: (state, action) => {
      state.userName = null;
      state.isLoading = false;
      state.status = 'rejected';
      state.isAuth = false;
      state.error = action.payload;
    },
    [login.pending]: (state) => {
      state.status = 'loading';
      state.isLoading = true;
      state.error = '';
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isLoading = false;
      state.userName = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    [login.rejected]: (state, action) => {
      state.userName = null;
      state.isLoading = false;
      state.status = 'rejected';
      state.isAuth = false;
      state.error = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.userName = null;
      state.isLoading = false;
      state.isAuth = false;
      state.status = 'resolved';
      state.error = action.payload;
    },
    [checkAuth.fulfilled]: (state) => {
      state.isAuth = true;
      state.error = '';
    },
    [checkAuth.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
    },
  },
});
