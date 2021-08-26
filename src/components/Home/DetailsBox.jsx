import React from 'react';

import {
  chakra,
  Box,
  Flex,
  Container,
  useColorModeValue,
  Icon,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
export default function DetailsBox() {
  const Feature = props => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue('brand.500', 'brand.300')}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color={useColorModeValue('gray.700', 'gray.400')}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Box bg={useColorModeValue('#F9FAFB', 'gray.600')} id="Features">
      <Container maxW="container.xl" px="5">
        <Flex w="auto" justifyContent="center" alignItems="center">
          <Box
            shadow="xl"
            bg={useColorModeValue('white', 'gray.800')}
            px={8}
            py={40}
            mx="auto"
          >
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, lg: 2 }}
              spacingY={{ base: 10, lg: 32 }}
              spacingX={{ base: 10, lg: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={3}
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight="extrabold"
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('black')}
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  Rarity
                </chakra.h2>
                <chakra.p
                  mb={6}
                  fontSize={{ base: 'lg', md: 'xl' }}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('gray.600', 'gray.500')}
                >
                  All babies are created equal, but each one is unique and
                  adorable in its own awesome way!
                </chakra.p>
              </Box>
              <VStack
                direction="column"
                flexGrow={1}
                spacing={5}
                alignItems="start"
              >
                <Feature>6 Baby Kings</Feature>
                <Feature>7 Baby Queens</Feature>
                <Feature>15 Baby Super Heros</Feature>
                <Feature>16 Baby Knights</Feature>
                <Feature>24 Legendary Baby Warriors</Feature>
                <Feature>
                  32 Babies representing 32 different cultures in Africa
                </Feature>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
