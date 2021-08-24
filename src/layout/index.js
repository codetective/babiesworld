import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Box maxW="1500px" m="auto">
      <Navbar />

      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
