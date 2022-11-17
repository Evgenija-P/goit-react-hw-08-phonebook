import { useDispatch } from 'react-redux';
import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { logIn } from 'redux/auth/operations';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <Flex align="center" justify="center" gap={7}>
        <Flex flexDir="column" gap={3}>
          <label>
            <Text>Email</Text>
            <Input
              placeholder="Enter Username"
              pr="10rem"
              borderColor="green.200"
              width="auto"
              variant="flushed"
              type="email"
              name="email"
            />
          </label>
          <label>
            <Text>Password</Text>
            <Input
              placeholder="Enter password"
              pr="10rem"
              borderColor="green.200"
              width="auto"
              variant="flushed"
              type="password"
              name="password"
            />
          </label>
        </Flex>
        <Button type="submit">Log In</Button>
      </Flex>
    </form>
  );
};
