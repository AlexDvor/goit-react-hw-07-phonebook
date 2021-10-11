import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contactsList/deleteContacts');
export const addContacts = createAction('form/addContacts');
export const filterByName = createAction('filter/handleFilterByName');
