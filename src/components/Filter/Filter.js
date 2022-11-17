import React from 'react';
import { setTextFilter } from 'redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { selectValue } from 'redux/contacts/selectors';

// import { Button } from './FeedbackOptions.styled';

export const Filter = () => {
  const value = useSelector(selectValue);

  const dispatch = useDispatch();
  const filretContacts = e => {
    dispatch(setTextFilter(e.currentTarget.value));
  };

  const filterId = nanoid(3);
  return (
    <label htmlFor={filterId}>
      <span>Find contacts by name</span>
      <input
        type="text"
        placeholder="Input name"
        value={value}
        onChange={filretContacts}
        id={filterId}
      />
    </label>
  );
};
