import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout';
import Hero from './components/Home/Hero';
import { Route, Switch } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import Features from './components/Home/Fatures';
import Roadmap from './components/Home/Roadmap';
import DetailsBox from './components/Home/DetailsBox';
import OurStory from './components/Home/OurStory';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#00203FFF',
    200: '#ADEFD1FF',
    300: '3d348b',
  },
};
const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/">
            <Hero />
            <Features />
            <DetailsBox />
            <OurStory />
            <Roadmap />
          </Route>
        </Switch>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
