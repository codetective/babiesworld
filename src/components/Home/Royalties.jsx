import React from 'react';
import { Container, Stack, Box, chakra } from '@chakra-ui/react';

export default function Royalties() {
  return (
    <Container maxW="container.xl" px="8">
      <Stack spacing={[10, 10, 20]} mx="auto" pt="20">
        <Box>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: 'center', md: 'center' }}
            color="gray.900"
            lineHeight={{ md: 'shorter' }}
          >
            Royalties
          </chakra.h2>
          <chakra.p
            textAlign={{ base: 'left', sm: 'left' }}
            color="gray.600"
            fontSize={{ md: 'lg' }}
          >
            Royalty fees are 5% on all secondary sales of which 40% for the
            Creators, 30% donated to charity to help improve the standard of
            living for newborns, 15% to be shared among the members of the
            Unique Clan monthly, and 15% to be shared to the community through
            giveaways
          </chakra.p>
        </Box>
      </Stack>
    </Container>
  );
}
