import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteContact, addContact, fetchContacts } from './operations';
import { selectContactItems } from '../contacts/selectors';
import { selectFilterName } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      //
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContactItems, selectFilterName],
  (contacts, filters) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase().trim())
    )
);
