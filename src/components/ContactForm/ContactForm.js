import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { BsPersonPlus } from 'react-icons/bs';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const nameId = nanoid(3);
  const numberId = nanoid(3);
  const { contacts } = useSelector(selectContacts);
  const [name, setNameForm] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setNameForm(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    console.log(contacts);
    e.preventDefault();
    if (contacts) {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return alert(`${name} is already in contacts.`);
      }
      dispatch(addContact({ name, number }));
      console.log({ name, number });
      reset();
    }

    return;
  };

  const reset = () => {
    setNameForm('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id={nameId}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          id={numberId}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
        <button type="submit">
          <BsPersonPlus size={33} />
        </button>
      </form>
    </>
  );
};
