import React from 'react';

import {
  chakra,
  Box,
  Flex,
  Container,
  useColorModeValue,
  Stack,
  HStack,
} from '@chakra-ui/react';
export default function DetailsBox() {
  return (
    <Box bg={useColorModeValue('#F9FAFB', 'gray.600')} id="Features">
      <Container maxW="container.xl" px="5">
        <Flex w="auto" justifyContent="center" alignItems="center">
          <Box
            shadow="xl"
            bg={useColorModeValue('white', 'gray.800')}
            px={8}
            py={20}
            mx="auto"
          >
            <Stack spacing="5">
              <chakra.h2
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="extrabold"
                textAlign={{ base: 'center', sm: 'center' }}
                color={useColorModeValue('black')}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Rarity
              </chakra.h2>
              <chakra.p
                mb={6}
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.500')}
              >
                All babies are created equal, but each one is unique and
                adorable in its own awesome way!
              </chakra.p>
              <chakra.p
                mb={6}
                fontSize={{ base: 'md', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.500')}
              >
                Each baby is uniquely and handmade created from over 228
                possible attributes, while each BW NFT is definitely unique;
                <br />
                Some BW NFTs are Rare,
                <br />
                Some are Super Rare,
                <br />
                While some are extremely Exceptional!
              </chakra.p>
              <Stack w={{ base: '100%', md: '80%' }}>
                <HStack justifyContent="space-between">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="semibold"
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    The Unique Clan numbers:
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    68/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between" pl="3">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    - Baby Kings
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    6/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between" pl="3">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    - Baby Queens
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    7/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between" pl="3">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    - Baby Super Heroes
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    15/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between" pl="3">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    - Baby Knights
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    16/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between" pl="3">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    - Legendary Baby Warriors
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    24/10000
                  </chakra.p>
                </HStack>
                <HStack justifyContent="space-between">
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="semibold"
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    Babies representing different cultures of the world
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.500')}
                  >
                    32/10000
                  </chakra.p>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
