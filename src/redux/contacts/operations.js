import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requesDeleteContact,
  requesEditContact,
  requestAddContact,
  requestGetContacts,
} from '../../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idContact, thunkAPI) => {
    try {
      const data = await requesDeleteContact(idContact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (editedFormData, thunkAPI) => {
    try {
      const data = await requesEditContact(editedFormData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
