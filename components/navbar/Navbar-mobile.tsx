import * as React from "react";
import {
  Box,
  Container,
  HStack,
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
import { AiFillHome } from "react-icons/ai";

const NAVBAR_MENU: [string, string][] = [
  ["About", navMenu.menu.about],
  ["Features", navMenu.menu.features],
  ["Products", navMenu.menu.product],
  ["Teams", navMenu.menu.teams],
  ["Contact", navMenu.menu.contact],
];

export const NavbarMobile: React.FC = () => {
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
                  size="lg"
                  px={2}
                >
                  Home
                </Button>
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
