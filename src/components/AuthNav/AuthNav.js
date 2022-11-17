import { Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <header>
      <Flex align="center" justify="space-between">
        <Flex align="center" justify="space-between" w={180}>
          <NavLink to="/register">
            <Text fontSize="24px" fontWeight="bold">
              Register
            </Text>
          </NavLink>
          <NavLink to="/login">
            <Text fontSize="24px" fontWeight="bold">
              Log In
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </header>
  );
};
