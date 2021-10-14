import { Container } from './components/Container/Container';
import Form from './components/Form';
import Contact from './components/Contact';
import Filter from './components/Filter';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contact />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default connect(null, null)(App);
