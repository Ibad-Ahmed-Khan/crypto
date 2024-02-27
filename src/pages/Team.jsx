import {
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import icon1 from "../assets/team-1.jpg";
import icon2 from "../assets/team-2.jpg";
import icon3 from "../assets/team-3.jpg";
import icon4 from "../assets/team-4.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Team = () => {
  const Data = [
    {
      img: icon1,
      title: "Joseph Brown",
      content: "Marketing Head",
    },
    {
      img: icon2,
      title: "Nancy White",
      content: "Marketing Head",
    },
    {
      img: icon3,
      title: "Earl Martinez",
      content: "Marketing Head",
    },
    {
      img: icon4,
      title: "Josephine Allard",
      content: "Marketing Head",
    },
  ];

  return (
    <VStack
      pt="4rem"
      pb="4rem"
      paddingInline="4"
      id="Team"
      bg="#00204a"
      minH="100vh"
      color="#fff"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
        Our<span style={{ color: "#00bbf0" }}>Team</span>
      </Heading>
      <SimpleGrid
        gap="2rem"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
        columns={{ base: "1", md: "2", lg: "2", xl: "4" }}
      >
        {Data.map((item, index) => {
          return (
            <VStack
              borderRadius="md"
              alignItems="center"
              justify="center"
              p="14"
              bg="#00295e"
              textTransform="capitalize"
              spacing="4"
            >
              <Box border="4px solid #fff" borderRadius="50%">
                <Image
                  borderRadius="50%"
                  w="7rem"
                  h="7rem"
                  objectFit="cover"
                  src={item.img}
                />
              </Box>

              <Text
                color="#00bbf0"
                fontSize={{ base: "lg", md: "lg", lg: "xl" }}
                fontWeight="500"
              >
                {item.title}
              </Text>
              <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                ({item.content})
              </Text>
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
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Team;
