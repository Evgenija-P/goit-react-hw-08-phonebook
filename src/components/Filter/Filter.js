import React from 'react';
import { setTextFilter } from 'redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { selectValue } from 'redux/contacts/selectors';
import { Flex, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const Filter = () => {
  const value = useSelector(selectValue);

  const dispatch = useDispatch();
  const filretContacts = e => {
    dispatch(setTextFilter(e.currentTarget.value));
  };

  const filterId = nanoid(3);
  return (
    <Flex align="center" justify="center" gap={7}>
      <label htmlFor={filterId}>
        <Input
          type="text"
          placeholder="Input name"
          pr="10rem"
          borderColor="green.200"
          width="auto"
          variant="flushed"
          value={value}
          onChange={filretContacts}
          id={filterId}
        />
      </label>
      <button type="submit">
        <Search2Icon w={6} h={6} />
      </button>
    </Flex>
  );
};
