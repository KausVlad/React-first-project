import { createSlice } from '@reduxjs/toolkit';
import { addApiKey, deleteApiKey, getAllApiKeys } from './apiKeys.actions';

export const apiKeysSlice = createSlice({
  name: 'apiKeys',
  initialState: {
    errorKey: null,
    isLoadingKey: false,
    testData: null,
    apiList: [],
  },
  reducers: {},
  extraReducers: {
    [addApiKey.pending]: (state) => {
      state.isLoadingKey = true;
    },
    [addApiKey.fulfilled]: (state, action) => {
      state.isLoadingKey = false;
      state.apiList = action.payload.apiKeys.apiKeys;
    },
    [addApiKey.rejected]: (state, action) => {
      state.isLoadingKey = false;
      state.errorKey = action.payload;
    },
    [deleteApiKey.pending]: (state) => {
      state.isLoadingKey = true;
      state.errorKey = null;
    },
    [deleteApiKey.fulfilled]: (state, action) => {
      state.isLoadingKey = false;
      state.testData = action.payload;
      state.errorKey = null;
      state.apiList = action.payload.apiKeys.apiKeys;
    },
    [deleteApiKey.rejected]: (state, action) => {
      state.isLoadingKey = false;
      state.errorKey = action.payload.message;
    },
    [getAllApiKeys.pending]: (state) => {
      state.isLoadingKey = true;
    },
    [getAllApiKeys.fulfilled]: (state, action) => {
      state.isLoadingKey = false;
      state.apiList = action.payload;
    },
    [getAllApiKeys.rejected]: (state, action) => {
      state.isLoadingKey = false;
      state.errorKey = action.payload;
    },
  },
});
