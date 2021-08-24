import { Box, chakra } from '@chakra-ui/react';
// import logo from '../assets/frestobabies.png';

const Logo = props => {
  return (
    <Box {...props}>
      <chakra.h1 fontWeight="600" fontSize="4xl">
        frestobabies
      </chakra.h1>
    </Box>
  );
};

export default Logo;
