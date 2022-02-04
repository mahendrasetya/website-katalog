import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import NextLink from "next/link";
import navMenu from "../../config/menu";

const NAVBAR_MENU: [string, string][] = [
  ["About", navMenu.menu.about],
  ["Features", navMenu.menu.features],
  ["Products", navMenu.menu.product],
  ["Teams", navMenu.menu.teams],
  ["Contact", navMenu.menu.contact],
];

export const NavbarDesktop: React.FC = () => {
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
                <Button
                  leftIcon={<AiFillHome />}
                  as="a"
                  variant="ghost"
                  px={2}
                  size="lg"
                >
                  Home
                </Button>
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
