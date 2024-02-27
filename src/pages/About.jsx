import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Text,
  VStack,
  Img,
  SimpleGrid,
} from "@chakra-ui/react";
import ButtonOne from "../components/Button";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <VStack
      paddingInline="4"
      id="About"
      pt="4rem"
      pb="4rem"
      gap="2rem"
      minH="100vh"
      textAlign="center"
      color="#fff"
      bg="#00204a"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <VStack>
        <Heading style={{ fontFamily: "Kode Mono, monospace" }}>
          About <span style={{ color: "#00bbf0" }}>Us</span>
        </Heading>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </Text>
        <SimpleGrid
          alignItems="center"
          justifyContent="center"
          columns={{
            base: "1",
            md: "1",
            lg: "2",
            xl: "2",
          }}
          gap="2rem"
          w="full"
          h="100%"
        >
          <Flex align="center" justify="center">
            <Img
              w={{ base: "16rem", md: "25rem", lg: "30rem", xl: "40rem" }}
              src={AboutImg}
            />
          </Flex>
          <Flex
            w="90%"
            minH="80vh"
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            align="center"
            justify="center"
            gap="4rem"
            textAlign="center"
          >
            <VStack spacing="4" align="start" justify="center" p="10">
              <Heading
                style={{ fontFamily: "Kode Mono, monospace" }}
                fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
                textTransform="capitalize"
              >
                We Are Finexo
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                textAlign="start"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </Text>
              <Text
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                textAlign="start"
              >
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </Text>
              <ButtonOne buttonText="Read More" />
            </VStack>
          </Flex>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default About;

// bgGradient="linear-gradient(to right, #1a1f71, #120A8F, #0C2340)"
