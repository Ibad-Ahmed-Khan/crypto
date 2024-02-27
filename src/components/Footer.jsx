import {
  Flex,
  Heading,
  Input,
  Box,
  Button,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ButtonOne from "./Button";

const Footer = () => {
  return (
    <SimpleGrid
      columns={{ base: "1", md: "1", lg: "4", xl: "4" }}
      style={{ fontFamily: '"Arima", system-ui' }}
      align="center"
      justify="center"
      gap="2rem"
      color="#fff"
      bg="#00204a"
      paddingInline="4rem"
      overflow="hidden"
    >
      <VStack pt="4rem" pb="4rem" align="start">
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
          Address
        </Heading>
        <Text fontSize={{ base: "sm", lg: "xl" }}>location</Text>
        <Text fontSize={{ base: "sm", lg: "xl" }}> Call +123456789</Text>
        <Text fontSize={{ base: "sm", lg: "xl" }}> mail@domain.com</Text>
        <Flex align="center" justify="center" gap="1.4rem">
          <Box
            as={FaFacebook}
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
            color="#fff" // Initial color (white)
            _hover={{ color: "#1877F2" }} // Hover color (Facebook brand color)
            cursor="pointer"
          />

          <Box
            as={FaTwitter}
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
            color="#fff" // Initial color (white)
            _hover={{ color: "#1DA1F2" }} // Hover color (Twitter brand color)
            cursor="pointer"
          />

          <Box
            as={FaLinkedin}
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
            color="#fff" // Initial color (white)
            _hover={{ color: "#0A66C2" }} // Hover color (LinkedIn brand color)
            cursor="pointer"
          />

          <Box
            as={FaInstagram}
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
            color="#fff" // Initial color (white)
            _hover={{ color: "#C13584" }} // Hover color (Instagram brand color)
            cursor="pointer"
          />

          <Box
            as={FaYoutube}
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
            color="#fff" // Initial color (white)
            _hover={{ color: "#FF0000" }} // Hover color (YouTube brand color)
            cursor="pointer"
          />
        </Flex>
      </VStack>
      <VStack pt="4rem" pb="4rem" align="start">
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>Info</Heading>
        <Text fontSize={{ base: "sm", lg: "xl" }} textAlign="start">
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful
        </Text>
      </VStack>
      <VStack
        pt="4rem"
        pb="4rem"
        align="start"
        ml="1rem"
        textTransform="capitalize"
      >
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>Links</Heading>
        <Text
          _hover={{ textDecoration: "underline", color: "#00bbf0" }}
          fontSize={{ base: "sm", lg: "xl" }}
          as={ScrollLink}
          to="Home"
          smooth={true}
          duration={500}
          cursor="pointer"
        >
          home
        </Text>
        <Text
          _hover={{ textDecoration: "underline", color: "#00bbf0" }}
          fontSize={{ base: "sm", lg: "xl" }}
          as={ScrollLink}
          to="Services"
          smooth={true}
          duration={500}
          cursor="pointer"
        >
          services
        </Text>
        <Text
          _hover={{ textDecoration: "underline", color: "#00bbf0" }}
          fontSize={{ base: "sm", lg: "xl" }}
          as={ScrollLink}
          to="About"
          smooth={true}
          duration={500}
          cursor="pointer"
        >
          about
        </Text>

        <Text
          _hover={{ textDecoration: "underline", color: "#00bbf0" }}
          fontSize={{ base: "sm", lg: "xl" }}
          as={ScrollLink}
          to="WhyUs"
          smooth={true}
          duration={500}
          cursor="pointer"
        >
          why us
        </Text>
        <Text
          _hover={{ textDecoration: "underline", color: "#00bbf0" }}
          fontSize={{ base: "sm", lg: "xl" }}
          as={ScrollLink}
          to="Team"
          smooth={true}
          duration={500}
          cursor="pointer"
        >
          team
        </Text>
      </VStack>
      <VStack pt="4rem" pb="4rem" spacing="4" align="start">
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
          Subscribe
        </Heading>
        <Input borderRadius="none" placeholder="Enter email" />
        <Button
          _hover={{ bg: "#00bbf0" }}
          bg="#00bbf0"
          w="full"
          borderRadius="none"
        >
          <ButtonOne buttonText="Subscribe" />
        </Button>
      </VStack>
    </SimpleGrid>
  );
};

export default Footer;
