import { Box, Flex, HStack, Link, Container } from '@chakra-ui/react';
import Logo from './Logo';
import { Link as RLink } from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';

const Links = [
  { path: '/', key: 'Home' },
  { key: 'Mint Now!', path: 'https://mint.babiesworldnft.com' },
];

export default function WithAction() {
  return (
    <>
      <Box bg="brand.100" px={4} py={[8, 8, 5, 5]} id="Header">
        <Container maxW="container.xl" px="5">
          {' '}
          <Flex
            h={16}
            alignItems={'center'}
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent={'space-between'}
          >
            <HStack>
              <HStack spacing={8} alignItems={'center'}>
                <Box color="white">
                  <Logo />
                </Box>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={{ base: 0, md: 2 }}
                display={{ base: 'flex', md: 'flex' }}
              >
                <Link
                  href={Links[0].path}
                  as={RLink}
                  fontSize={['16px', '20px']}
                  duration={500}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1}
                  rounded={'md'}
                  color="white"
                  _hover={{
                    textDecoration: 'underline',
                  }}
                  _focus={{
                    bg: 'none',
                  }}
                >
                  <Box mr="1">{Links[0].key}</Box>
                </Link>
                <Link
                  href={Links[1].path}
                  as={'a'}
                  fontSize={['16px', '20px']}
                  duration={500}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1}
                  rounded={'md'}
                  color="white"
                  _hover={{
                    textDecoration: 'underline',
                  }}
                  _focus={{
                    bg: 'none',
                  }}
                >
                  <Box mr="1">{Links[1].key}</Box>
                </Link>

                <Link
                  href="https://opensea.io/collection/babiesworldcollectionmain"
                  isExternal
                  as={'a'}
                  fontSize={['16px', '20px']}
                  duration={500}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1}
                  rounded={'md'}
                  color="white"
                  _hover={{
                    textDecoration: 'underline',
                  }}
                  _focus={{
                    bg: 'none',
                  }}
                >
                  <Box mr="1">Opensea</Box> <BiLinkExternal />
                </Link>
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
