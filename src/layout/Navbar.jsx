import { Box, Flex, HStack, Link, Container, Tooltip } from '@chakra-ui/react';
import Logo from './Logo';
import { Link as RLink } from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';

const Links = [
  { path: '/', key: 'Home' },
  { key: 'Minting Soon!', path: '/' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={RLink}
    to={path}
    fontSize={['16px', '20px']}
    duration={500}
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
    {children}
  </Link>
);

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
                {Links.map(link => (
                  <NavLink key={link.key} path={link.path}>
                    {link.key}
                  </NavLink>
                ))}
                {/* remove this to launch */}
                <Tooltip
                  hasArrow
                  label="Coming Soon"
                  bg="gray.300"
                  color="black"
                >
                  <Link
                    // href="https://opensea.io"
                    // isExternal
                    as={RLink}
                    to="/"
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
                </Tooltip>
                {/* remove */}
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
