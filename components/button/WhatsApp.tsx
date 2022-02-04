import * as React from "react";
import NextLink from "next/link";
import { Box, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import links from "@/config/link";

export const WhatsApp: React.FC = () => {
  return (
    <Box
      position="fixed"
      zIndex={999}
      right={["2rem", "3rem"]}
      bottom={["3rem", "3rem"]}
    >
      <NextLink href={links.socials.WhatsApp} passHref>
        <Button
          w={16}
          h={16}
          as="a"
          colorScheme="whatsapp"
          variant="solid"
          borderRadius="full"
          boxShadow="xl"
          target="_blank"
        >
          <Icon color="whatsapp" as={FaWhatsapp} boxSize={12} p={0.5} />
        </Button>
      </NextLink>
    </Box>
  );
};
