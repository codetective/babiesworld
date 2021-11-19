import {
  SimpleGrid,
  Stack,
  Box,
  Image,
  chakra,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import frestin from '../../assets/team/frestin.jpeg';
import stephen from '../../assets/team/stephen.jpeg';
import temple from '../../assets/team/temple.jpeg';
import edidiong from '../../assets/team/edidiong.jpeg';
import codetective from '../../assets/team/codetective.jpeg';
import willie from '../../assets/team/willie.jpeg';
import oriaku from '../../assets/team/oriaku.jpeg';
import dominic from '../../assets/team/dominic.jpeg';
import upgodwin from '../../assets/team/upgodwin.jpeg';
import cypher from '../../assets/team/cypher.jpeg';

function TeamMate({ src, name, desc }) {
  return (
    <Box rounded="lg" boxShadow="lg" bg="white">
      <Box roundedBottom="20px">
        <Image src={src} roundedBottom="20px" />
      </Box>
      <Stack px="5" py="5">
        <chakra.h2
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="semibold"
          lineHeight="shorter"
          textAlign="center"
          textTransform="uppercase"
        >
          {name}
        </chakra.h2>
        <chakra.p
          mb={6}
          textAlign="center"
          fontSize={{ base: 'sm', md: 'md' }}
          color="gray.600"
        >
          {desc}
        </chakra.p>
      </Stack>
    </Box>
  );
}

export default function Team() {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl" px="5" py="10">
        <Stack pb="20">
          <chakra.h2
            py={8}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
            lineHeight={{ md: 'shorter' }}
          >
            Meet the Team
          </chakra.h2>
          <SimpleGrid columns={[1, 2, 4]} spacing="5">
            <TeamMate src={frestin} name="Frestin" desc="Creator" />
            <TeamMate src={dominic} name="Dominic" desc="Developer" />
            <TeamMate src={oriaku} name="Oriaku" desc="Artist" />
            <TeamMate
              src={temple}
              name="Temple"
              desc="Runs the entire babiesworld ops"
            />
          </SimpleGrid>
          <chakra.h2
            py={8}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
            lineHeight={{ md: 'shorter' }}
          >
            Other Members
          </chakra.h2>
          <SimpleGrid columns={[1, 2, 4]} spacing="5">
            <TeamMate src={upgodwin} name="UpGodwin" desc="Community Manager" />
            <TeamMate src={cypher} name="Cypher" desc="Publicity" />
            <TeamMate src={codetective} name="Codetective" desc="Developer" />
            <TeamMate src={willie} name="Miss Willie" />
            <TeamMate src={edidiong} name="Edidiong" />
            <TeamMate src={stephen} name="Stephen" />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
