import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ButtonOne = ({ buttonText }) => {
  return (
    <Button
      borderRadius="none"
      color="#fff"
      bg="#00bbf0"
      _hover={{
        p: "2",
        bg: "#00bbf0",
        ".icon": {
          transform: "rotate(180deg)",
        },
      }}
      transition="all .23s ease-in-out"
    >
      <Flex align="center" justify="center" gap=".7rem">
        <Text
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          transition="all .23s ease-in-out"
        >
          {" "}
          {buttonText}{" "}
        </Text>
        <Box
          className="icon"
          transform="rotate(0deg)"
          transition="all .23s ease-in-out"
          as={FaLongArrowAltRight}
        />
      </Flex>
    </Button>
  );
};

export default ButtonOne;
