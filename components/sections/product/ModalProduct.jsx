import React from "react";
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Divider,
} from "@chakra-ui/react";

const ModalProduct = ({ spesification }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button
        variant="outline"
        colorScheme="black"
        onClick={() => handleSizeClick("xl")}
      >
        Spesifikasi
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={size}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Spesifikasi</ModalHeader>
          <ModalCloseButton />

          <ModalBody my={6}>
            {spesification.map((data) => (
              // <ListItem key={data}>{data}</ListItem>
              <Box key={data}>
                <Text dangerouslySetInnerHTML={{ __html: data }} />
                <Divider my={4} />
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Tutup</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProduct;
