import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Faq from '../components/Home/Faq';
function Layout({ children }) {
  return (
    <Box maxW="1500px" m="auto">
      <Navbar />

      {children}
      <Box m="auto" className="beforeFooterBox" w="100%"></Box>
      <Faq />
      <Footer />
    </Box>
  );
}

export default Layout;
