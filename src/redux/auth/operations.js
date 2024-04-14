import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestGetCurrentUser,
  requestSignIn,
  requestSignUp,
  setToken,
} from '../../services/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.auth.token;

    if (userToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setToken(userToken);
    try {
      const data = await requestGetCurrentUser();
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
