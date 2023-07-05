import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api, API_URL } from '../../http/httpConfig';
import axios from 'axios';

export const testFetch = createAsyncThunk(
  'auth/testFetch',
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await $api.get('/t');
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const reg = createAsyncThunk(
  'auth/reg',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/reg', { email, password });
      localStorage.setItem('token', fetchData.data.accessToken);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/login', { email, password });
      localStorage.setItem('token', fetchData.data.accessToken);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await $api.post('/logout');
      localStorage.removeItem('token');
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', fetchData.data.accessToken);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue({ message: error.response?.data?.message });
    }
  }
);
