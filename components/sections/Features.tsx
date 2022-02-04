import * as React from "react";
import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Grid,
  Icon,
  createIcon,
} from "@chakra-ui/react";
import Integrity from "@/components/icons/integrity.svg";
import Quality from "@/components/icons/quality.svg";
import Commitment from "@/components/icons/commitment.svg";
import Innovation from "@/components/icons/innovation.svg";
import features from "../../content/features.json";

const FEATURE_INFO: [string, string, any][] = [
  [features[0].title, features[0].desc, Integrity],
  [features[1].title, features[1].desc, Quality],
  [features[2].title, features[2].desc, Commitment],
  [features[3].title, features[3].desc, Innovation],
];

export const Features: React.FC = () => {
  return (
    <>
      <Box id="features" w="full" minH="100vh" bgColor="gray.50">
        <Container maxW="container.lg" py={24} px={[6, 0]} h="100%">
          <VStack alignItems="center" mb={[12, 24]}>
            <Heading as="h1" size="xl">
              Our Key Features
            </Heading>
          </VStack>

          <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            justifyItems="center"
            alignItems="center"
            gap={[12, 24]}
          >
            {FEATURE_INFO.map(([feature, description, icon]) => (
              <VStack
                key={feature}
                justifyItems="center"
                alignItems="center"
                textAlign="center"
                spacing={4}
                h="100%"
              >
                <Icon key={icon} as={icon} w={81} h={78} />
                <Heading as="h3" fontSize="2xl">
                  {feature}
                </Heading>
                <Text fontSize="lg">{description}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
