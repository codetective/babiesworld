import { Box, Flex, HStack, Link, Button, Container } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';

const Links = ['About', 'Roadmap', 'Features'];

const NavLink = ({ children }) => (
  <Link
    as={ScrollLink}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-70}
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
                pr="4"
                as={'nav'}
                spacing={{ base: 0, md: 2 }}
                display={{ base: 'flex', md: 'flex' }}
              >
                {Links.map(link => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
              <Button
                colorScheme="purple"
                variant={'solid'}
                color="brand.100"
                bg="brand.200"
                size={'sm'}
              >
                Mint Soon!.
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
