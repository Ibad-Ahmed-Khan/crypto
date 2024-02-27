import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import icon1 from "../assets/w1.png";
import icon2 from "../assets/w2.png";
import icon3 from "../assets/w3.png";
import icon4 from "../assets/w4.png";

import ButtonOne from "../components/Button";

const Data = [
  {
    img: icon1,
    title: "Expert Management",
    content:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. possimus animi autem natus",
  },
  {
    img: icon2,
    title: "Secure Investment",
    content:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. possimus animi autem natus",
  },
  {
    img: icon3,
    title: "Instant Trading",
    content:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. possimus animi autem natus",
  },
  {
    img: icon4,
    title: "Happy Customers",
    content:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. possimus animi autem natus",
  },
];

const WhyUs = () => {
  return (
    <VStack
      paddingInline="4"
      id="WhyUs"
      pt="4rem"
      pb="4rem"
      gap="2rem"
      minH="100vh"
      textAlign="center"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <VStack>
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
          Why Choose <span style={{ color: "#00bbf0" }}>Us</span>
        </Heading>
        <Text>
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
        // gap="4rem"
        // bg="red"
        textAlign="center"
      >
        <SimpleGrid
          gap="4rem"
          columns={{ base: "1", md: "1", lg: "2", xl: "2" }}
        >
          {Data.map((item, index) => {
            return (
              <VStack
                _hover={{
                  border: "4px solid #00bbf0",
                  " .circle": {
                    border: "4px solid #00bbf0",
                  },
                }}
                border="4px solid #000"
                transition="all .3s ease-in-out "
                alignItems="center"
                justify="center"
                p="4"
                textTransform="capitalize"
                // borderTopLeftRadius="4rem"
                // borderBottomRightRadius="4rem"
              >
                <Box
                  className="circle"
                  p="1"
                  border="4px solid #000"
                  transition="all .3s ease-in-out "
                  borderRadius="50%"
                >
                  <Image
                    p="3"
                    w="4rem"
                    h="4rem"
                    objectFit="cover"
                    src={item.img}
                  />
                </Box>

                <Text
                  fontSize={{ base: "lg", md: "lg", lg: "xl" }}
                  fontWeight="bold"
                >
                  {item.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "sm", lg: "md" }}>
                  {item.content}{" "}
                </Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </Flex>
      <ButtonOne buttonText="View All" />
    </VStack>
  );
};

export default WhyUs;
