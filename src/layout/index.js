import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import collage from '../assets/babynftcollage.jpg';
function Layout({ children }) {
  return (
    <Box maxW="1500px" m="auto">
      <Navbar />

      {children}
      <Box
        bgImage={"url('/babynftcollage.jpg')"}
        bgPos="center"
        bgBlendMode="darken"
        bgColor="rgba(0,0,0,0.8)"
      >
        <Box m="auto" w={['full', 'full', 'full', '80%']}>
          <Image src={collage} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
