import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      console.log(thunkAPI);
      console.log(response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
