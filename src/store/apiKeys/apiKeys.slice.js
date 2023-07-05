import { createSlice } from '@reduxjs/toolkit';

export const apiKeysSlice = createSlice({
  name: 'apiKeys',
  initialState: {
    errorKey: null,
    isLoadingKey: false,
  },
  reducers: {},
  extraReducers: {},
});
