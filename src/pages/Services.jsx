import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import icon1 from "../assets/s1.png";
import icon2 from "../assets/s2.png";
import icon3 from "../assets/s3.png";
import ButtonOne from "../components/Button";

const Data = [
  {
    img: icon1,
    title: "CURRENCY WALLET",
    content:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    img: icon2,
    title: "SECURITY STORAGE",
    content:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    img: icon3,
    title: "EXPERT SUPPORT",
    content:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
];

const Services = () => {
  return (
    <VStack
      paddingInline="4"
      id="Services"
      pt="4rem"
      pb="4rem"
      gap="2rem"
      minH="100vh"
      textAlign="center"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <VStack>
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
          Our <span style={{ color: "#00bbf0" }}>Services</span>
        </Heading>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </Text>
      </VStack>
      <Flex
        w="90%"
        minH="80vh"
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        align="center"
        justify="center"
        gap="4rem"
        textAlign="center"
      >
        {" "}
        {Data.map((item, index) => {
          return (
            <VStack
              bg="gray.50"
              alignItems="center"
              justify="center"
              p="10"
              textTransform="capitalize"
              borderRadius="md"
            >
              <Image
                w={{ base: "3rem", md: "4rem", lg: "5rem" }}
                src={item.img}
              />
              <Text
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                fontWeight="bold"
              >
                {item.title}{" "}
              </Text>
              <Text fontSize={{ base: "sm", md: "sm", lg: "md" }}>
                {item.content}{" "}
              </Text>

              <Button
                variant="unstyled"
                borderRadius="none"
                color="blue"
                fontWeight="400"
                _hover={{ color: "#00bbf0" }}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Read More
              </Button>
            </VStack>
          );
        })}{" "}
      </Flex>
      <ButtonOne buttonText="View All" />
    </VStack>
  );
};

export default Services;
