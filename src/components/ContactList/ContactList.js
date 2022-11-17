import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectValue } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const filter = useSelector(selectValue);
  const { contacts, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalized = filter.toLocaleLowerCase();
  const contactsFilter = contacts?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  const contactsState = contactsFilter.sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <ul>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts &&
        contactsState.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};
