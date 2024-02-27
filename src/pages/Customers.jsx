import {
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import icon1 from "../assets/client1.jpg";
import icon2 from "../assets/client2.jpg";

const Customers = () => {
  const [slider, setSlider] = useState(false);

  const nextSlider = () => {
    console.log("Next Slider clicked");
    setSlider(!slider);
  };

  const previousSlider = () => {
    console.log("Previous Slider clicked");
    setSlider(!slider);
  };

  const Data = [
    {
      id: 1,
      img: icon1,
      title: "LusDen",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
    {
      id: 2,
      img: icon2,
      title: "Zen Court",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
  ];

  return (
    <VStack
      justifyContent="center"
      paddingInline={{ base: "1rem", md: "4rem" }}
      style={{ fontFamily: '"Arima", system-ui' }}
      pt="4rem"
      pb="4rem"
      minH="100vh"
    >
      <Heading
        style={{ fontFamily: "Kode Mono, monospace" }}
        textAlign="center"
      >
        What our{" "}
        <Box as="span" color="#00bbf0">
          Customers
        </Box>{" "}
        say
      </Heading>
      <SimpleGrid
        gap={{ base: "1rem", md: "3rem" }}
        columns={{ base: 1, md: 2 }}
      >
        {Data.map((item) => (
          <Flex
            key={item.id}
            direction="column"
            align="start"
            p="4"
            mt="14"
            pb="10"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.5)"
            transition="all .3s ease-in-out"
          >
            <Image
              pos="relative"
              top={{ base: "-2rem", md: "-4rem" }}
              left="0"
              borderRadius="50%"
              src={item.img}
              alt={item.title}
            />
            <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              {item.title}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{item.subtitle}</Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{item.content}</Text>
            <Box pos="relative" left="95%" bottom="7rem" as={FaQuoteLeft} />
          </Flex>
        ))}
      </SimpleGrid>
      <Flex align="center" justify="center" gap="2rem" pt="4rem">
        <Button
          onClick={previousSlider}
          cursor="pointer"
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          as={FaArrowLeft}
          aria-label="Previous Slide"
        />
        <Button
          onClick={nextSlider}
          cursor="pointer"
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          as={FaArrowRight}
          aria-label="Next Slide"
        />
      </Flex>
    </VStack>
  );
};

export default Customers;
