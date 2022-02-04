import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Spacer,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import teams from "content/teams.json";

export const Teams: React.FC = () => {
  const basePath = "/avatar";

  return (
    <>
      <Box id="teams" w="full" minH="100vh" bgColor="gray.50">
        <Container maxW="container.lg" py={24} px={[6, 0]}>
          <VStack alignItems="center" mb={[12, 24]}>
            <Heading as="h1" size="xl">
              Our Teams
            </Heading>
          </VStack>

          <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
            justifyItems="center"
            alignItems="center"
            gap={[12, 12]}
          >
            {teams.map((team) => (
              <VStack key={team.id} textAlign="center">
                <Avatar
                  w={56}
                  h={56}
                  mb={4}
                  bg="teal.400"
                  name={team.name}
                  src={`${basePath}/${team.avatar}`}
                />
                <Text fontWeight="medium" fontSize="xl" textColor="green.700">
                  {team.name}
                </Text>
                <Text fontWeight="medium">{team.role}</Text>
                <Text>{team.info}</Text>
                <NextLink href={team.socials} passHref>
                  <Button as="a" px={2} variant="ghost" target="_blank">
                    <Icon as={FaInstagram} w={6} h={6} />
                  </Button>
                </NextLink>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
