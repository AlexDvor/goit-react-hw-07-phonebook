import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';
import * as actions from '../../redux/Contact/contacts-actions';
import * as contactsOperations from '../../redux/Contact/contacts-operations';
import { visibleContactsSelector } from '../../redux/Contact/contacts-selectors';

export default function ContactList() {
  const dataUsers = useSelector(visibleContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      {dataUsers.length > 0 &&
        dataUsers.map(({ name, id, number }) => (
          <li key={id}>
            {name} : {number}
            <Button onClick={() => dispatch(actions.deleteContacts(id))}>Delete</Button>
          </li>
        ))}
    </>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
