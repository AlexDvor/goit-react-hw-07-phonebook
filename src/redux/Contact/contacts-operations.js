import * as actions from './contacts-actions';
import * as services from '../../services/fetchContacts';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());
  try {
    const contacts = await services.fetchContacts();
    dispatch(actions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.getContactsError());
  }
};

export const postContacts = newUserData => async dispatch => {
  dispatch(actions.postContactsRequest());
  try {
    await services.postContacts(newUserData);
    dispatch(actions.postContactsSuccess());
    const contacts = await services.fetchContacts();
    dispatch(actions.updatedListUsers(contacts));
  } catch (error) {
    dispatch(actions.postContactsError());
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(actions.deleteContactsRequest());
  try {
    await services.deleteContacts(id);
    dispatch(actions.deleteContactsSuccess());
    const contacts = await services.fetchContacts();
    dispatch(actions.updatedListUsers(contacts));
  } catch (error) {
    dispatch(actions.deleteContactsError());
  }
};
