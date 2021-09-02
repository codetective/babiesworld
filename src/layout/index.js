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
      <Image src={collage} />
      <Footer />
    </Box>
  );
}

export default Layout;
