import { Heading, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <Text
        fontSize="4xl"
        mt={50}
        textAlign={'center'}
        fontWeight="bold"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      > */}
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
      {/* </Text> */}
    </div>
  );
};

export default Home;
