import { Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import * as actions from '../../redux/Contact/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from '../../redux/Contact/contacts-operations';

export default function ContactList() {
  const dataUsers = useSelector(state => state.contacts.items);
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  console.log('dataUsers', dataUsers);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  // const renderUserContacts = dataUsers => {
  //   if (dataUsers) {
  //     return dataUsers.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  //   }
  // };

  // const visibleContacts = renderUserContacts(dataUsers);

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

// const mapStateToProps = state => ({
//   dataUsers: state.contacts.items,
//   name: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(actions.deleteContacts(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
