import * as React from "react";
import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Spacer,
} from "@chakra-ui/react";
import about from "content/about.json";

export const AboutVideo: React.FC = () => {
  const basePath = "/video";

  return (
    <>
      <Box id="about-us" w="full" minH="100vh">
        <Container maxW="container.lg" py={24} px={[6, 0]}>
          <Heading as="h1" size="xl" mb={12}>
            About Us
          </Heading>
          <Stack w="100%" direction={["column-reverse", "row"]} spacing={4}>
            <VStack
              w={["100%", "50%"]}
              alignItems="flex-start"
              spacing={[4, 8]}
            >
              <Text fontSize="2xl">{about.heading}</Text>
              <Text fontSize="xl">{about.subheading}</Text>
            </VStack>

            <Spacer />

            <VStack>
              <Box
                width="100%"
                height="auto"
                objectFit="cover"
                borderRadius="md"
                boxShadow="lg"
              >
                <video width="420" height="auto" controls>
                  <source src={`${basePath}/${about.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
