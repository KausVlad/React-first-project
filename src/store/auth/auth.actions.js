import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../http/httpConfig';

export const testFetch = createAsyncThunk(
  'auth/testFetch',
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await $api.get('/t');
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const reg = createAsyncThunk(
  'auth/reg',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/reg', { email, password });
      localStorage.setItem('token', fetchData.data.accessToken);
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/login', { email, password });
      localStorage.setItem('token', fetchData.data.accessToken);
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/logout');
      localStorage.removeItem('token');
      console.log(fetchData);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);
