import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../navbar";
import { Footer } from "../Footer";
import { WhatsApp } from "../button/WhatsApp";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box minH={["70vh", "55vh"]}>{children}</Box>
      <Footer />
      <WhatsApp />
    </>
  );
};
