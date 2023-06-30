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
