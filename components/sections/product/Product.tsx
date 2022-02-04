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
import { Slides } from "./Slides";

export const Product: React.FC = () => {
  return (
    <>
      <Box id="products" w="full" minH="100vh" bgColor="white" mb={[0, 12]}>
        <Container
          maxW={["container.xl", "container.lg"]}
          py={24}
          px={[-4, 0]}
          h="100%"
        >
          <VStack alignItems={["center", "flex-start"]} mx={[0, 16]} mb={12}>
            <Heading as="h1" size="xl">
              Our Product
            </Heading>
          </VStack>
          <Slides />
        </Container>
      </Box>
    </>
  );
};
