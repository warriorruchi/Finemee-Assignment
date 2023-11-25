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

export default function Oilgas() {
  return (
    <Container maxW={"8xl"} data-aos="fade-up" data-aos-duration="1000">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pt={10}
        pb={20}
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
                "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
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
            <Text color="#FF3A2D">Oil & Gas</Text>
          </Heading>
          <Text color={"black"} textAlign={"justify"}>
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment.
          </Text>
          <Text color={"black"} textAlign={"justify"}>
            NTWIST helps Oil & Gas customers to analyze historical data,
            identify opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
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
