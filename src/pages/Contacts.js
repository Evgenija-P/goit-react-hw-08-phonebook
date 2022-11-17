import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { fetchContacts } from 'redux/contacts/operations';
import { Text, Flex } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && 'Request in progress...'}</div>
      <Flex align="center" justify="center" my={5}>
        <Text as="b" fontSize="18px">
          Add new contact
        </Text>
      </Flex>
      <ContactForm />
      <Flex align="center" justify="center" my={7}>
        <Text as="b" fontSize="18px">
          Find contact
        </Text>
      </Flex>
      <Filter />
      <Flex align="center" justify="center" my={7}>
        <Text as="b" fontSize="18px">
          Your contacts
        </Text>
      </Flex>
      <ContactList />
    </>
  );
}
