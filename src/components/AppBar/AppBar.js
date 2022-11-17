import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Flex
        align="center"
        justify="space-between"
        pb={5}
        mb={5}
        borderBottom="1px"
        borderColor="green.200"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </header>
  );
};
