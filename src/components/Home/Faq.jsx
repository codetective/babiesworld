import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Box,
  Container,
  chakra,
} from '@chakra-ui/react';
import React from 'react';

const faqArray = [
  {
    title: 'When is the drop?',
    content: 'The community will decide the drop date on the discord channel',
  },
  {
    title: 'where can i buy?',
    content: (
      <>
        {' '}
        Only on this website ⬇️ <br /> https://babiesworldnft.com. Don’t send
        ETH to anyone asking in DM
      </>
    ),
  },
  {
    title: 'how many babies?',
    content: '10000 Uniquely and handmade created lovely babies',
  },
  {
    title: 'WHAT IS THE PRICE ?',
    content: ' Each 👶 cost 0.04 ETH ',
  },
  {
    title: ' HOW CAN I KNOW IF MY BW NFT AMONG THE UNIQUE CLAN ? ',
    content:
      'After the 100% sell out , the characteristics of the Unique Clan will be listed out on the websites ',
  },
  {
    title: 'what about OWNERSHIP RIGHTs?',
    content: 'Commercial usage and Ownership rights belongs to the NFT holder.',
  },
  {
    title: ' WHAT IS THE REWARD FOR BELONGING TO THE UNIQUE CLAN ? ',
    content:
      '15% of the Royalties generated from secondary will belongs to members of the Unique Clan',
  },
  {
    title: 'reveal type?',
    content: 'Instant',
  },
  {
    title: 'WHERE CAN I SEE MY BABIES AFTER MINTING ?',
    content: 'Immediately on the sale page',
  },
];

function FaqItem({ title, content }) {
  return (
    <AccordionItem borderTop="0" mb="4">
      <h2>
        <AccordionButton
          p="4"
          rounded="10px"
          bg="gray.100"
          _focus={{
            boxShadow: 'none',
          }}
        >
          <Box
            flex="1"
            textAlign="left"
            fontWeight="semibold"
            textTransform="uppercase"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <chakra.p
          textAlign={{ base: 'left', sm: 'left' }}
          color="gray.600"
          fontSize={{ md: 'lg' }}
          fontWeight="600"
        >
          {content}
        </chakra.p>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default function Faq() {
  return (
    <Container maxW="container.xl" px="5" py="10">
      <Stack py="20">
        <chakra.h2
          mb={4}
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          color="gray.900"
          lineHeight={{ md: 'shorter' }}
        >
          FAQs
        </chakra.h2>
        <Accordion allowToggle>
          {faqArray.map((item, index) => (
            <FaqItem key={index} title={item.title} content={item.content} />
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
}
