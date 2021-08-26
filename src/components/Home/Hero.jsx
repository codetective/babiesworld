import React from 'react';
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Center,
  Badge,
  Button,
  Container,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg="brand.200" py="10" mb="20">
      <Container maxW="container.xl" px="8">
        <SimpleGrid
          py="50"
          columns={{ base: 1, md: 2 }}
          spacing={0}
          _after={{
            // bg: 'brand.300',
            opacity: 0.25,
            pos: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            content: '" "',
          }}
        >
          <Center flexDir="column" py="30">
            <Flex
              direction="column"
              alignItems="start"
              justifyContent="center"
              // px={{ base: 4, lg: 20 }}
              py={50}
            >
              <Badge
                color="white"
                px={3}
                py={1}
                mb={3}
                variant="solid"
                colorScheme="purple"
                rounded="full"
              >
                We love babies!
              </Badge>
              <chakra.h1
                mb={6}
                fontSize={{ base: '5xl', md: '4xl', lg: '6xl' }}
                fontWeight="bold"
                color={useColorModeValue('brand.600', 'gray.300')}
                lineHeight="shorter"
              >
                Welcome to Babies World!
              </chakra.h1>

              <chakra.p
                pr={{ base: 0, lg: 16 }}
                mb={4}
                fontSize="sm"
                // color={useColorModeValue('brand.600', 'gray.400')}
                color="brand.100"
                letterSpacing="wider"
                className="roboto"
              >
                A rich collection of 10,000 uniquely crafted NFT babies, one for
                every beautiful baby ever made!
              </chakra.p>
              <Button
                variant={'solid'}
                colorScheme="purple"
                bg="brand.100"
                size={'lg'}
                color="brand.200"
              >
                Minting Soon.
              </Button>
            </Flex>
          </Center>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              alt="3 women looking at a laptop"
              fit="cover"
              w="full"
              h={{ base: 64, md: 'full' }}
              bg="gray.100"
              loading="lazy"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
