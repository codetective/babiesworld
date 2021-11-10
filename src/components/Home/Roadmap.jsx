import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Box, chakra, Container } from '@chakra-ui/react';
export default function Roadmap() {
  return (
    <Box py="20" id="Roadmap">
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
            dateText="PRE-SALE"
            style={{ color: '#b3cde0' }}
            // dateInnerStyle={{ background: '#b3cde0' }}
            dateInnerStyle={{ background: 'green' }}
          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              pb='3'
            >
              Beginnings
            </chakra.h2>
            <p>
              📍 Creation of the official website of Babies world for Minting
              Purpose and Other usage ✔️
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="PRE-SALE"
            style={{ color: '#b3cde0' }}
            // dateInnerStyle={{ background: '#b3cde0' }}
            dateInnerStyle={{ background: 'green' }}

          >
            <chakra.h2
              mb={5}
              fontSize={{ base: 'xl', md: 'xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
              pb="3"
            >
              Welcome to OpenSea!
            </chakra.h2>
            <p>📍 Listing on OpenSea ✔️</p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="10% SALES"
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
              pb="3"
            >
              More Listing!
            </chakra.h2>
            <p>📍 Rarity Tools listing after 10% Sales.</p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="20% SALES"
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
              pb="3"
            >
              Building the Community!
            </chakra.h2>
            {/* <h4>Donation:</h4> */}

            <p>📍 Community Fund gets filled with 3ETH upon 20% sales.</p>
          </TimelineItem>
          {/* ------------------------ */}
          <TimelineItem
            key="005"
            dateText="50% SALES"
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
              pb="3"
            >
              Here comes the Merch!
            </chakra.h2>
            {/* <h4>Airdrop:</h4> */}
            <p>
              📍Our Merch will be released after 50% of Babies World have been
              Sold.
            </p>
          </TimelineItem>
          <TimelineItem
            key="006"
            dateText="50% SALES"
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
              pb="3"
            >
              For Charity!
            </chakra.h2>
            <p>
              📍At this stage of the project, Babies World Community members
              will nominate a Charity Organization of their choice for a
              donation to help fight against infants mortality.
            </p>
          </TimelineItem>
          <TimelineItem
            key="007"
            dateText="60% SALES"
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
              pb="3"
            >
              Babies Tokens Release.
            </chakra.h2>
            <p>
              📍60% of Babies World sold, we would be releasing a decentralized
              Token for Babies World Holders and the general public.
            </p>
          </TimelineItem>
          <TimelineItem
            key="008"
            dateText="80% SALES"
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
              pb="3"
            >
              More Airdrop!
            </chakra.h2>
            <p>
              📍80% of Babies World sold - Free Airdrops to all holders of our
              top secret project, NFTs of this first collections would serve as
              mint pass / free mint
            </p>
          </TimelineItem>
          <TimelineItem
            key="009"
            dateText="90% SALES"
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
              pb="3"
            >
              Babies World Game Design!
            </chakra.h2>
            <p>
              📍 Babies World Game Development goes into final design phase.
            </p>
          </TimelineItem>
          <TimelineItem
            key="010"
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
              pb="3"
            >
              Growing with the Community!
            </chakra.h2>
            <p>
              📍 We would choose 5 members from the discord Channel to join the
              administrative team to help us grow at some point in the course of
              this project.
            </p>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}
