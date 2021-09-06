import React from 'react';

import {
  Box,
  Container,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  Image,
} from '@chakra-ui/react';
import baby1 from '../../assets/baby1.png';
import baby2 from '../../assets/baby2.png';

export default function Features() {
  return (
    <Flex
      bg="#F9FAFB"
      w="full"
      justifyContent="center"
      alignItems="center"
      id="About"
      pt="20"
    >
      <Container maxW="container.xl" px="8">
        <Stack spacing={[10, 10, 20]} py={['60px', '60px', 20]} mx="auto">
          <SimpleGrid
            id="about"
            alignItems="center"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: 'center', md: 'left' }}
                color="gray.900"
                lineHeight={{ md: 'shorter' }}
              >
                What is Babies World NFT?
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: 'center', sm: 'left' }}
                color="gray.600"
                fontSize={{ md: 'lg' }}
              >
                Babies world is an NFT developed to show the beauty of babies
                around the world. It gives us the privilege of seeing the world
                through the eyes of babies harnessing the power of the emerging
                NFT market to fight against infant mortality rate.
                <br />
                <br /> Babies world aims to showcase the dynamic nature of
                babies from various cultural perspectives through NFTs, which we
                believe will help the world see the similarities in our diverse
                cultures.
              </chakra.p>
            </Box>
            <Box w="full">
              <Image alt="awesome baby" src={baby1} fit="contain" />
            </Box>
          </SimpleGrid>
          {/* second row starts */}
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, md: 2 }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
            id="benefits"
          >
            <Box order={{ base: 'none', md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: 'center', md: 'left' }}
                color="gray.900"
                lineHeight={{ md: 'shorter' }}
              >
                What benefits are there?
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: 'center', sm: 'left' }}
                color="gray.600"
                fontSize={{ md: 'lg' }}
              >
                First 100 holders will receive Babies World custom merchandise
                for free anywhere they live in the world. Asides being the owner
                of a beautiful work of art, all holders contribute to our
                growing budget for donations to any orphanage in the world.
                <br />
                <br />
                With increasing rates of infant mortality across the globe,
                especially in third world countries, Fresto Babies World is
                taking a stand to fight against infants. mortality rate.
                <br /> You help us achieve our mission when you purchase Babies
                World NFT's; 20% of all sales (primary sale) will be donated to
                children's institutions around the world.
              </chakra.p>
            </Box>
            <Box w="full">
              <Image
                alt="amazing babies world baby"
                src={baby2}
                fit="contain"
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
    </Flex>
  );
}
