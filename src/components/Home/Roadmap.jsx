import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Box, chakra, Container } from '@chakra-ui/react';
export default function Roadmap() {
  return (
    <Box>
      <Container maxW="container.xl">
        <chakra.h2
          mb={4}
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          textAlign="center"
          color="gray.900"
          lineHeight={{ md: 'shorter' }}
        >
          Our Roadmap
        </chakra.h2>
        <Timeline lineColor={'teal'}>
          <TimelineItem
            key="001"
            dateText="10% SALES"
            style={{ color: '#b3cde0' }}
            dateInnerStyle={{ background: '#b3cde0' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              py="3"
            >
              Giveaways & Freebies!
            </chakra.h2>
            <p>
              1.5% of primary sales will be given to the community through
              giveaways on our social media platforms.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="25% SALES"
            dateInnerStyle={{ background: '#6497b1' }}
            style={{ color: '#61b8ff' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              py="3"
            >
              Babies Against Infant Mortality!
            </chakra.h2>
            <h4>Donation:</h4>
            <p>
              5% of all primary sales will be donated to UNILEVER to help
              eradicate maternal and infant mortality in Africa.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="50% SALES"
            style={{ color: '#005b96 ' }}
            dateInnerStyle={{ background: '#005b96' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              py="3"
            >
              Babies Gift an Orphanage!
            </chakra.h2>
            <h4>Donation:</h4>

            <p>
              5% of all primary sales will be donated to any random Orphanage
              across the globe
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="75% SALES"
            dateInnerStyle={{ background: '#03396c' }}
            style={{ color: '#03396c ' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              py="3"
            >
              Holders Recieve Their Babies!
            </chakra.h2>
            <h4>Airdrop:</h4>
            <p>
              First 100 holders will receive custom merchandise for free
              anywhere they live in the world
            </p>
          </TimelineItem>
          <TimelineItem
            key="005"
            dateText="100% SALES"
            dateInnerStyle={{ background: '#011f4b' }}
            style={{ color: '#011f4b' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              py="3"
            >
              Babies Save The Children!
            </chakra.h2>
            <h4>Donation:</h4>
            <p>
              10% of all primary sales will be donated to savethechildren.org to
              help fight infant mortality across the Globe.
            </p>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}
