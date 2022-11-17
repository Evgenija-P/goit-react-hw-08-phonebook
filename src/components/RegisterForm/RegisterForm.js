import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Input, Flex, Text } from '@chakra-ui/react';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <Flex align="center" justify="center" gap={7}>
        <Flex flexDir="column" gap={3}>
          <label>
            <Text>Username</Text>
            <Input
              placeholder="Enter Username"
              pr="10rem"
              borderColor="green.200"
              width="auto"
              variant="flushed"
              type="text"
              name="name"
            />
          </label>
          <label>
            <Text>Email</Text>
            <Input
              placeholder="Enter email"
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
              placeholder="Your password"
              pr="10rem"
              borderColor="green.200"
              width="auto"
              variant="flushed"
              type="password"
              name="password"
            />
          </label>
        </Flex>
        <Button type="submit">Register</Button>
      </Flex>
    </form>
  );
};
