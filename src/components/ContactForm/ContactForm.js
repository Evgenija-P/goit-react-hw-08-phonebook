import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Flex, Input, Text } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

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
        <Flex align="center" justify="center" gap={7}>
          <Flex flexDir="column" gap={3}>
            <label htmlFor={nameId}>
              <Text>Name</Text>
              <Input
                type="text"
                name="name"
                value={name}
                id={nameId}
                placeholder="Name"
                pr="10rem"
                borderColor="green.200"
                width="auto"
                variant="flushed"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChangeName}
              />
            </label>
            <label htmlFor={numberId}>
              <Text>Number</Text>
              <Input
                type="tel"
                name="number"
                value={number}
                id={numberId}
                pr="10rem"
                borderColor="green.200"
                width="auto"
                variant="flushed"
                placeholder="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChangeNumber}
              />
            </label>
          </Flex>
          <button type="submit">
            <CheckIcon w={6} h={6} />
          </button>
        </Flex>
      </form>
    </>
  );
};
