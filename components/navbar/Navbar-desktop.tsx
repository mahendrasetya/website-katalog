import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import navMenu from "../../config/menu";
import logo from "@/content/hero.json";

const NAVBAR_MENU: [string, string][] = [
  ["About", navMenu.menu.about],
  ["Features", navMenu.menu.features],
  ["Products", navMenu.menu.product],
  ["Teams", navMenu.menu.teams],
  ["Contact", navMenu.menu.contact],
];

export const NavbarDesktop: React.FC = () => {
  const basePath = "/img";

  return (
    <>
      <Box w="full" position="fixed" zIndex={100} bgColor="gray.50">
        <Container
          as="header"
          maxW="container.lg"
          maxH="100%"
          h="64px"
          py={2}
          px={[6, 0]}
        >
          <HStack>
            <Box>
              <NextLink href="/" passHref>
                <Image
                  src={`${basePath}/${logo.logo}`}
                  alt="logo"
                  _hover={{ cursor: "pointer" }}
                />
              </NextLink>
            </Box>

            <Spacer />

            <HStack spacing={4}>
              {NAVBAR_MENU.map(([name, section]) => (
                <NextLink key={name} href={section} passHref>
                  <Button as="a" variant="ghost" size="lg">
                    {name}
                  </Button>
                </NextLink>
              ))}
            </HStack>
          </HStack>
        </Container>

        <Divider />
      </Box>
    </>
  );
};
