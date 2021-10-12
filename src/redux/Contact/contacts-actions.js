import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contactsList/deleteContacts');
export const addContacts = createAction('form/addContacts');
export const filterByName = createAction('filter/handleFilterByName');

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');
