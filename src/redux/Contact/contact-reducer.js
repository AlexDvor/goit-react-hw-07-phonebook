import { combineReducers } from 'redux';
import * as type from './contact-actions';
import { createReducer } from '@reduxjs/toolkit';

const itemReducer = createReducer([], {
  [type.addContacts]: (state, action) => [...state, action.payload],
  [type.deleteContacts]: (state, action) => state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer('', {
  [type.filterByName]: (state, action) => (state = action.payload),
});

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;
