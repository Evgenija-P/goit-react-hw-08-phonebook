import { Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Heading
        fontSize="5xl"
        mt={50}
        textAlign={'center'}
        fontWeight="extrabold"
        letterSpacing={2}
        lineHeight={2}
        bgGradient="linear(to-l, green.900, green.500, green.200)"
        bgClip="text"
      >
        Welcome to the phone book!
      </Heading>
    </div>
  );
};

export default Home;
