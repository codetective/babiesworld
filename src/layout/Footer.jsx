import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';
import { Link as ScrollLink } from 'react-scroll';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="brand.100" color="white" py="10" id="footer">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Link
            as={ScrollLink}
            activeClass="active"
            to={'Header'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            px={2}
            py={1}
            rounded={'md'}
            color="white"
          >
            Top
          </Link>
          <Link
            as={ScrollLink}
            activeClass="active"
            to={'About'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            px={2}
            py={1}
            rounded={'md'}
            color="white"
            href={'#'}
          >
            About
          </Link>
          <Link
            as={ScrollLink}
            activeClass="active"
            to={'Features'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            px={2}
            py={1}
            rounded={'md'}
            color="white"
            href={'#'}
          >
            Features
          </Link>
          <Link
            as={ScrollLink}
            activeClass="active"
            to={'Roadmap'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            px={2}
            py={1}
            rounded={'md'}
            color="white"
            href={'#'}
          >
            Roadmap
          </Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={'brand.200'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Stack>
            <Text>© 2021 Frestotech Labs Africa. </Text>
            {/* <Link href="https://frestotech.net">frestotech.net</Link> */}
          </Stack>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
