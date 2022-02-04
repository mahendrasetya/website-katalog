import * as React from "react";
import NextLink from "next/link";
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
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import contact from "@/content/contact.json";
import link from "@/config/link";

const SOSIAL_MEDIA: [string, string, IconType][] = [
  ["Instagram", link.socials.Instagram, FaInstagram],
  ["Facebook", link.socials.Facebook, FaFacebook],
  ["Linkedin", link.socials.Linkedin, FaLinkedin],
];

export const Footer: React.FC = () => {
  return (
    <>
      <Box id="contact" w="full" h="90vh" bgColor="gray.700" textColor="white">
        <Container maxW="container.lg" h="100%" py={24} px={[6, 0]}>
          <VStack alignItems="center" mb={24}>
            <Heading as="h1" size="xl">
              Questions?
            </Heading>

            <Text fontSize="xl">Let’s Get In Touch</Text>
          </VStack>

          <VStack w={["100%", "50%"]} alignItems="flex-start" spacing={8}>
            <Heading as="h1" size="lg" fontWeight="semibold">
              {contact.company}
            </Heading>

            <Text fontSize="xl">{contact.info}</Text>

            <HStack spacing={6}>
              {SOSIAL_MEDIA.map(([name, href, AsIcon]) => (
                <NextLink key={name} href={href} passHref>
                  <Button
                    as="a"
                    colorScheme="whiteAlpha"
                    variant="ghost"
                    target="_blank"
                    px={2}
                  >
                    <Icon color="white" as={AsIcon} boxSize={6} />
                  </Button>
                </NextLink>
              ))}
            </HStack>
          </VStack>
        </Container>

        <Box w="full" h="64px" bgColor="gray.900" textColor="white">
          <Container
            maxW="container.lg"
            h="100%"
            display="flex"
            alignItems="center"
            px={[6, 0]}
          >
            <Text fontWeight="medium">
              © 2022 Lorem Ipsum. All rights reserved
            </Text>
          </Container>
        </Box>
      </Box>
    </>
  );
};
