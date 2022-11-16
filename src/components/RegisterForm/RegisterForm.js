import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Input } from '@chakra-ui/react';
import { FormWrapper, Label, TitleLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TitleLabel>Username</TitleLabel>

        <Input
          placeholder="Enter Username"
          pr="10rem"
          width="auto"
          borderColor="purple"
          variant="flushed"
          type="text"
          name="name"
        />
      </Label>
      <Label>
        <TitleLabel>Email</TitleLabel>

        <Input
          placeholder="Enter email"
          pr="10rem"
          width="auto"
          borderColor="purple"
          variant="flushed"
          type="email"
          name="email"
        />
      </Label>
      <Label>
        <TitleLabel>Password</TitleLabel>

        <Input
          placeholder="Your password"
          pr="10rem"
          width="auto"
          borderColor="purple"
          variant="flushed"
          type="password"
          name="password"
        />
      </Label>
      <Button colorScheme="whiteAlpha" type="submit" variant="outline">
        Register
      </Button>
    </FormWrapper>
  );
};
