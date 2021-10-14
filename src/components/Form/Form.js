// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FormItem, Input } from './Form.styled.jsx';
import ButtonItem from '../Button';
import * as operations from '../../redux/Contact/contacts-operations';
import * as selector from '../../redux/Contact/contacts-selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = useSelector(selector.getContactsSelector);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      name,
      number,
    };
    checkUserName(state, contactData);
    setName('');
    setNumber('');
  };

  const checkUserName = (userData, newData) => {
    if (userData.some(item => item.name === newData.name)) {
      return alert(`${newData.name} is already in contacts`);
    }

    dispatch(operations.postContacts(newData));
  };

  return (
    <>
      <div>
        <FormItem onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Name"
          />
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Phone number"
          />
          <ButtonItem text="Add contact" />
        </FormItem>
      </div>
    </>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};
