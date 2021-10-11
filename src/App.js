import { Container } from './components/Container/Container';
// import { useState, useEffect } from 'react';
import Form from './components/Form';
import Contact from './components/Contact';
import Filter from './components/Filter';
import { connect } from 'react-redux';

function App({ contacts, filter }) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const getData = ({ name, id, number }) => {
  //   const newContacts = {
  //     name,
  //     id,
  //     number,
  //   };
  //   updateContacts(newContacts);
  // };

  // const updateContacts = newData => {
  //   console.log(contacts);
  //   contacts.some(item => item.name === newData.name)
  //     ? alert(`${newData.name} is already in contacts`)
  //     : setContacts(prevState => [...prevState, newData]);
  // };

  // const handleFilterByName = e => setFilter(e.target.value);

  // const renderListName = (array, name) => {
  //   return array.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  // };

  // const deleteNameItem = id => {
  //   setContacts(prevState => prevState.filter(item => item.id !== id));
  // };

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contact />
    </Container>
  );
}

// const mapDispatchToProps = dispatch => ({
//   getData: () => dispatch(actions.getData()),
// });

export default connect(null, null)(App);
