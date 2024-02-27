import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";
import { CloseButton } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [drawer, setDrawer] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  const handleToggleDrawer = () => {
    console.log("Astaghfirullah");
    setDrawer(!drawer);
  };

  return (
    <Box
      w="full"
      overflow="hidden"
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <Box onClick={handleToggleDrawer} cursor="pointer" as={FaSearch} />
      <Box
        // border="4px solid red"
        pos="absolute"
        left="0"
        top="0"
        bg="#fff"
        w="full"
        h={drawer ? "8rem" : "0"}
        transform={drawer ? "scale(1,1)" : "scale(1,0)"}
        transformOrigin="top"
        transition="all .6s ease-in-out"
        opacity="0.999"
        color="#000"
      >
        <VStack
          // border="5px solid red"
          align="start"
          justify="center"
          p="4"
          // marginInline="6rem"
          w="full"
          overflow="hidden"
          h="100%"
        >
          <Flex w="full" justify="space-between">
            <Text color="gray" fontSize="sm">
              WHAT ARE YOU LOOKING FOR?
            </Text>
            <Box
              onClick={handleToggleDrawer}
              as={CloseButton}
              pr="1.2rem"
              h="full"
              fontSize="1rem"
              fontWeight="100"
              color="#00bbf0"
              _hover={{
                bg: "transparent",
              }}
            />
          </Flex>
          <Flex
            w="full"
            h="5rem"
            align="center"
            justify="center"
            gap="2rem"
            transition="all .6s ease-in-out"
          >
            <InputGroup
              transition="all .6s ease-in-out"
              alignItems="center"
              h="full"
              verticalAlign="middle"
            >
              <Input
                variant="flused"
                sx={{
                  "&:focus": {
                    // borderBottom: "2px solid #00bbf0",
                    boxShadow: "none",
                  },
                  "&::-webkit-search-cancel-button": {
                    display: "none",
                  },
                }}
                className="search"
                type="search"
                value={value}
                onChange={handleChange}
                placeholder="Search here..."
                _placeholder={{ color: "#000" }}
                transform={drawer ? "scale(1,1)" : "scale(1,0)"}
                transformOrigin="top"
                // h="full"
                transition="all .6s ease-in-out"
                fontSize="1.3rem"
                border="none"
                borderRadius="none"
                borderBottom="2px solid #00bbf0"
              />

              <InputRightElement
                pr="1rem"
                h="full"
                fontSize="md"
                as={FaSearch}
              />
            </InputGroup>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Search;
