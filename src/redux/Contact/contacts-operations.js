import * as actions from './contacts-actions';
import * as services from '../../services/fetchContacts';

export const getContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const contacts = await services.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError());
  }
};
