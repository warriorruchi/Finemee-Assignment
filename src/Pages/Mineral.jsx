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

export default function Mineral() {
  return (
    <Container maxW={"8xl"} data-aos="fade-up" data-aos-duration="1000">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={10}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          >
            <Text color="#FF3A2D">Mineral Processing</Text>
          </Heading>
          <Text color={"black"} textAlign={"justify"}>
            NTWIST offers a number of solutions for mills, concentrators, and
            leach plants. Our solutions help operations to reduce the effect of
            feed variability, avoid downtime and increase peak throughput while
            decreasing energy and reagent consumption.
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
        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <Box height={"400px"} width={"full"} overflow={"hidden"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
