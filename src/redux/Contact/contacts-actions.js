import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contactsList/deleteContacts');
export const addContacts = createAction('form/addContacts');
export const filterByName = createAction('filter/handleFilterByName');

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const postContactsRequest = createAction('contacts/postContactsRequest');
export const postContactsSuccess = createAction('contacts/postContactsSuccess');
export const postContactsError = createAction('contacts/postContactsError');

export const deleteContactsRequest = createAction('delete/postContactsRequest');
export const deleteContactsSuccess = createAction('delete/postContactsSuccess');
export const deleteContactsError = createAction('delete/postContactsError');

export const updatedListUsers = createAction('contacts/updatedListUsers');
