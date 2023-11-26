import React, { useEffect } from "react";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import "aos/dist/aos.css";

export default function Sustainablity() {
  return (
    <Container maxW={"8xl"} data-aos="fade-up" data-aos-duration="1000">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <Box height={"400px"} width={"full"} overflow={"hidden"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
              }
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          >
            <Text color="#FF3A2D">Sustainability</Text>
          </Heading>
          <Text color={"black"} textAlign={"justify"}>
            Environmental stewardship is a priority for NTWIST. We help our
            customers to minimize their sustainability impact on the planet.
            Emissions or environmental targets are used alongside productivity
            targets to define success for our customers.
          </Text>
          <Text color={"black"} textAlign={"justify"}>
            With the increasing relevance of carbon accounting and emissions
            tracking, NTWIST offers a suite of tools to increase visibility into
            environmental performance and help processing plants track, manage,
            optimize, and report key metrics.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"5px"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"#FF3A2D"}
              _hover={{ bg: "#FF3A2D" }}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
