import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Img,
  VStack,
} from "@chakra-ui/react";
import HeroBg from "../assets/hero-bg.png";
import HeroBg2 from "../assets/slider-img.png";
import ButtonOne from "../components/Button";

const Home = () => {
  return (
    <VStack
      // border="4px solid red"
      p="8"
      id="Home"
      pt="6rem"
      bgImage={`url(${HeroBg})`}
      backgroundSize="cover"
      backgroundPosition="bottom"
      minH="100vh"
      color="#fff"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <SimpleGrid
        // border="4px solid red"
        columns={{
          base: "1",
          md: "1",
          lg: "2",
          xl: "2",
        }}
        gap="2rem"
        minH="80vh"
      >
        <VStack
          spacing="4"
          align="start"
          justify="center"
          // border="4px solid red"
        >
          <Heading
            style={{ fontFamily: "Kode Mono, monospace" }}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
            textTransform="uppercase"
          >
            crypto currency
          </Heading>
          <Text fontSize={{ base: "sm", md: "sm", lg: "md" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sit
            et sequi earum veritatis cumque tenetur id laborum. Quasi quam,
            natus impedit laudantium neque suscipit eligendi deserunt odio
            obcaecati voluptatum, explicabo repellat, praesentium ad soluta
            culpa eaque fugiat id error voluptatem placeat magni at porro est?
            Dicta explicabo nostrum quasi facere doloremque ex cupiditate,
            laborum debitis, quibusdam iste veritatis atque.
          </Text>
          <ButtonOne buttonText="Read More" />
        </VStack>
        <Flex align="center" justify="center" position="relative">
          <style>
            {`
          @keyframes moveBg {
            0% {
              transform: translateY(0%);
            }
            50% {
              transform: translateY(-15%);
            }
            100% {
              transform: translateY(0%);
            }
          }
        `}
          </style>
          <Box
            w={{ base: "20rem", md: "25rem", lg: "30rem", xl: "35rem" }}
            // overflow="visible"
          >
            <Img
              src={HeroBg2}
              className="animated-img"
              animation="moveBg 5s linear infinite"
              objectFit="cover"
              objectPosition="top"
              w="100%"
              h="100%"
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
