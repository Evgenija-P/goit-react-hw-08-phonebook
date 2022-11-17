import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Text
      fontSize="4xl"
      mt={50}
      textAlign={'center'}
      fontWeight="bold"
      letterSpacing={2}
      lineHeight={2}
    >
      Sorry, this page not found
      <Text fontSize="5xl">
        <Link to="/">Go to Home</Link>
      </Text>
    </Text>
  );
};
