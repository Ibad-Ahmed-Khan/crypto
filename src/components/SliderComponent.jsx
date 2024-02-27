import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import icon1 from "../assets/client1.jpg";
import icon2 from "../assets/client2.jpg";

const ClientCard = ({ img, title, subtitle, content }) => (
  <Flex
    w="full"
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
      src={img}
      alt={title}
    />
    <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
      {title}
    </Text>
    <Text fontSize={{ base: "sm", md: "md" }}>{subtitle}</Text>
    <Text fontSize={{ base: "sm", md: "md" }}>{content}</Text>
    <Box pos="relative" left="95%" bottom="7rem" as={FaQuoteLeft} />
  </Flex>
);

const SliderComponent = () => {
  const sliderRef = useRef(null); // Ref to Slider component

  const data = [
    {
      img: icon1,
      title: "i am 1",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
    {
      img: icon2,
      title: "i am 2",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
    {
      img: icon2,
      title: "i am 3",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
    {
      img: icon2,
      title: "i am 4",
      subtitle: " sit amet consectetur",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, culpa. Quidem sequi molestias veniam quisquam omnis laboriosam corrupti dolor libero.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to the previous slide
    }
  };

  return (
    <Box>
      <Heading
        pos="relative"
        top="3rem"
        style={{ fontFamily: "Kode Mono, monospace" }}
        textAlign="center"
      >
        What our
        <Box as="span" color="#00bbf0">
          Customers
        </Box>
        say
      </Heading>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <SimpleGrid
              minH="80vh"
              alignItems="center"
              justifyContent="center"
              p="3rem"
              overflow="hidden"
              gap={{ base: "1rem", md: "3rem" }}
              style={{ fontFamily: '"Arima", system-ui' }}
            >
              <ClientCard key={index} {...item} />
            </SimpleGrid>
          </div>
        ))}
      </Slider>
      <Flex pos="relative" align="center" justify="center" gap="2rem" pt="4rem">
        <Button
          onClick={prevSlide}
          pos="absolute"
          top="-3rem"
          transform="translate(-100%,0%)"
          cursor="pointer"
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          as={FaArrowLeft}
          aria-label="Previous Slide"
        />
        <Button
          onClick={nextSlide}
          pos="absolute"
          top="-3rem"
          transform="translate(100%,0%)"
          cursor="pointer"
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          as={FaArrowRight}
          aria-label="Next Slide"
        />
      </Flex>
    </Box>
  );
};

export default SliderComponent;
