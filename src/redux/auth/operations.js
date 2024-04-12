import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestSignUp } from '../../services/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log(thunkAPI);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
