import { useDispatch } from 'react-redux';
import { Button, Input } from '@chakra-ui/react';

import { logIn } from 'redux/auth/operations';
import { FormWrapper, Label, TitleLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TitleLabel>Email</TitleLabel>
        <Input
          placeholder="Enter Username"
          colorScheme="whiteAlpha"
          pr="10rem"
          borderColor="purple"
          width="auto"
          variant="flushed"
          type="email"
          name="email"
        />
      </Label>
      <Label>
        <TitleLabel>Password</TitleLabel>
        <Input
          placeholder="Enter password"
          colorScheme="whiteAlpha"
          pr="10rem"
          borderColor="purple"
          width="auto"
          variant="flushed"
          type="password"
          name="password"
        />
      </Label>
      <Button colorScheme="whiteAlpha" type="submit" variant="outline">
        Log In
      </Button>
    </FormWrapper>
  );
};
