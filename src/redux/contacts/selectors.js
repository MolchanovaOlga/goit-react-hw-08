import { selectFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContactItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContactItems, selectFilter],
  (contacts, filters) =>
    contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filters.toLowerCase().trim()) ||
        contact.number.includes(filters.trim())
      );
    })
);

export const selectContactsIsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;
