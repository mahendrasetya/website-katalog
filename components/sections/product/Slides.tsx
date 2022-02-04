import * as React from "react";
import NextLink from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  VStack,
  Spacer,
  ButtonGroup,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import links from "@/config/link";
import products from "@/content/product.json";
import ModalProduct from "@/components/sections/product/ModalProduct";

SwiperCore.use([Pagination, Navigation]);

export const Slides: React.FC = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
      >
        {products.map((product) => {
          const basePath = "/img";
          const spesification = product.spesification;

          return (
            <SwiperSlide key={product.id}>
              <Stack
                w="auto"
                h="full"
                mx={[14, 16]}
                mb={16}
                direction={["column-reverse", "row"]}
                justifyContent="center"
                alignItems="flex-start"
              >
                <VStack
                  w={["100%", "50%"]}
                  h="100%"
                  alignItems="flex-start"
                  spacing={[6, 8]}
                >
                  <Heading
                    as="h1"
                    fontSize={["3xl", "2xl"]}
                    fontWeight="semibold"
                    textColor="green.700"
                  >
                    {product.name}
                  </Heading>

                  <Text fontSize="xl">{product.info}</Text>

                  <ButtonGroup size="md" spacing={4}>
                    <ModalProduct spesification={spesification} />

                    <NextLink href={links.socials.WhatsApp} passHref>
                      <Button
                        rightIcon={<FaWhatsapp />}
                        as="a"
                        colorScheme="whatsapp"
                        variant="solid"
                        target="_blank"
                      >
                        Contact Us
                      </Button>
                    </NextLink>
                  </ButtonGroup>
                </VStack>

                <Spacer />

                <VStack>
                  <Image
                    src={`${basePath}/${product.img}`}
                    alt={product.name}
                    w="100%"
                    h="240px"
                    objectFit="cover"
                    borderRadius="md"
                    boxShadow="lg"
                  />
                </VStack>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
