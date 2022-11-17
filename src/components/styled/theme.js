import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    book: {
      50: 'green',
      100: 'green',
      200: 'green',
      300: 'green',
      500: 'green',
      600: 'green',
      700: 'green',
      900: '#1a202c',
    },
  },
});

export default theme;
