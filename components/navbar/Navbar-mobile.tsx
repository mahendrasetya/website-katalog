import * as React from "react";
import {
  Box,
  Container,
  Stack,
  HStack,
  Image,
  Button,
  Icon,
  IconButton,
  Heading,
  Spacer,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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

export const NavbarMobile: React.FC = () => {
  const basePath = "/img";

  return (
    <>
      <Box w="full" position="fixed" zIndex={100} bgColor="gray.50">
        <Container
          as="header"
          maxW="container.lg"
          maxH="100%"
          h="64px"
          py={3}
          px={[6, 0]}
        >
          <HStack>
            <Box>
              <NextLink href="/" passHref>
                <Image
                  src={`${basePath}/${logo.logo}`}
                  alt="logo"
                  mt={2}
                  _hover={{ cursor: "pointer" }}
                />
              </NextLink>
            </Box>

            <Spacer />

            <Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  {NAVBAR_MENU.map(([name, section]) => (
                    <NextLink key={name} href={section} passHref>
                      <MenuItem as="a">{name}</MenuItem>
                    </NextLink>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Container>

        <Divider />
      </Box>
    </>
  );
};
