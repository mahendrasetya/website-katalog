import * as React from "react";
import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import hero from "@/content/hero.json";

export const Hero: React.FC = () => {
  return (
    <>
      <Box
        w="full"
        h="100vh"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../img/nature-bg.jpg')"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
      >
        <VStack alignItems="center" justifyContent="center" h="100%">
          <Container maxW="container.lg" px={[6, 0]}>
            <Box w={["100%", "50%"]}>
              <Text
                fontSize="xl"
                fontWeight="semibold"
                textColor="whiteAlpha.900"
                mb={4}
              >
                {hero.subheading}
              </Text>

              <Heading as="h1" size="2xl" textColor="white" lineHeight={1.4}>
                {hero.heading}
              </Heading>

              <Button variant="solid" colorScheme="green" size="lg" my={12}>
                Learn More
              </Button>
            </Box>
          </Container>
        </VStack>
      </Box>
    </>
  );
};
