import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../http/httpConfig';

export const addApiKey = createAsyncThunk(
  'apiKeys/addApiKey',
  async ({ emailName, apiKey }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/apiKeys', { emailName, apiKey });
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const deleteApiKey = createAsyncThunk(
  'apiKeys/deleteApiKey',
  async ({ emailName, apiKeyIndex }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.patch(`/apiKeys`, {
        emailName,
        apiKeyIndex,
      });
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const getAllApiKeys = createAsyncThunk(
  'apiKeys/getAllApiKeys',
  async ({ emailName }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.get(`/apiKeys/${emailName}`);
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);
