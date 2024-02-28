import {
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
  Box,
  Link as ChakraLink,
  CloseButton,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import Login from "./Login";
import Search from "./Search";
import { useState } from "react";
import HeroBg from "../assets/hero-bg.png";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const Data = [
    { id: "Home", linkname: "home" },
    { id: "Services", linkname: "services" },
    { id: "About", linkname: "about" },
    { id: "WhyUs", linkname: "whyUs" },
    { id: "Team", linkname: "team" },
  ];

  const [isLine, setIsLine] = useState([]);
  const handleToggleIsLine = (index) => {
    if (!isLine.includes(index)) {
      setIsLine((prevState) => [[], index]);
    }
  };
  const logo = (index) => {
    setIsLine((prevState) => [[], index]);
  };

  const changeBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const textColor = navBar ? "#00bbf0" : "#fff";

  return (
    <SimpleGrid
      alignItems="center"
      justifyContent="center"
      // bg="transparent"
      pos="fixed"
      top="0"
      letterSpacing="1px"
      fontWeight="bold"
      w="full"
      p="4"
      columns="2"
      zIndex="111"
      textTransform="uppercase"
      color={navBar ? "#000" : "#fff"}
      backgroundSize="cover"
      backgroundPosition="center"
      bg={navBar ? "#fff" : "transparent"}
      transform={navBar ? "scale(1,1)" : "scale(1,1)"}
      transformOrigin="top"
      transition="all .23s ease-in-out"
      fontSize={{ base: "sm", md: "sm", lg: "md" }}
      style={{ fontFamily: '"Arima", system-ui' }}
    >
      <Text cursor="pointer" fontSize="lg">
        <ChakraLink
          onClick={logo}
          fontWeight="500"
          as={ScrollLink}
          to="Home"
          smooth={true}
          duration={500}
          position="relative"
          fontSize="xl"
          _hover={{
            textDecoration: "none",
            color: "#00bbf0",
            _after: {
              width: "100%",
              opacity: "0.8",
            },
            _before: {
              width: "100%",
              opacity: "0.8",
            },
            "& > span": {
              opacity: 1, // Ensure span is visible on hover
              w: "56%",
            },
            "& > spanTwo": {
              opacity: 1, // Ensure span is visible on hover
              w: "37%",
            },
            "& > .spanText": {
              color: textColor,
            },
          }}
          // _after={{
          //   content: "''",
          //   width: "0",
          //   height: "2px",
          //   backgroundColor: "#00bbf0",
          //   position: "absolute",
          //   top: "-20%",
          //   left: "-50%",
          //   transform: "translate(50%,50%)",
          //   opacity: "0.1",
          //   transition: ".3s ease-in-out",
          // }}
          // _before={{
          //   content: "''",
          //   width: "0",
          //   height: "2px",
          //   backgroundColor: "#00bbf0",
          //   position: "absolute",
          //   bottom: "-10%",
          //   right: "-50%",
          //   transform: "translate(-50%,-50%)",
          //   opacity: "0.1",
          //   transition: ".3s ease-in-out",
          // }}
        >
          <Box as="span" className="spanText" color="#00bbf0">
            {" "}
            Ibad{" "}
          </Box>
          Ahmed
          <Box
            as="span"
            position="absolute"
            right="0"
            top="0%"
            transform="translate(0%,-50%)"
            width="0"
            h="4px"
            backgroundColor="#00bbf0"
            transition=".3s ease-in-out"
          ></Box>
          <Box
            as="spanTwo"
            position="absolute"
            left="-3px"
            bottom="0%"
            transform="translate(0%,-50%)"
            width="0"
            h="4px"
            backgroundColor="#00bbf0"
            transition=".3s ease-in-out"
          ></Box>
        </ChakraLink>
      </Text>
      {/* Desktop  */}
      <Flex
        display={{ base: "none", md: "none", lg: "Flex", xl: "Flex" }}
        pr="2rem"
        align="center"
        justify="end"
        gap="2rem"
      >
        {Data.map((item, index) => {
          return (
            <ChakraLink
              key={item.id}
              fontWeight="500"
              as={ScrollLink}
              to={item.id}
              smooth={true}
              duration={500}
              position="relative"
              _hover={{
                textDecoration: "none",
                _after: {
                  width: "100%",
                },
                color: "#00bbf0",
              }}
              _after={{
                content: "''",
                width: "0",
                height: "1.3px",
                transition: "width .25s ease-in-out",
                backgroundColor: "#00bbf0",
                position: "absolute",
                top: "-10%",
                left: "-50%",
                transform: " translate(50%,50%) ",
              }}
              onClick={() => handleToggleIsLine(index)}
            >
              <Box
                bg={isLine.includes(index) ? "#00bbf0" : ""}
                h="2px"
                pos="relative"
                top="-3px"
                transition="all .3s ease-in-out"
              ></Box>
              {item.linkname}
            </ChakraLink>
          );
        })}
        {/* </ChakraLink> */}

        <ChakraLink
          fontWeight="500"
          as={ScrollLink}
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          <Login />
        </ChakraLink>

        <ChakraLink
          fontWeight="500"
          as={ScrollLink}
          smooth={true}
          duration={500}
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
        >
          <Box>
            <Search />
          </Box>
        </ChakraLink>
      </Flex>
      <Box
        display={{ base: "block", md: "block", lg: "none", xl: "none" }}
        pos="absolute"
        right="1rem"
        onClick={handleToggleIsOpen}
        as={HamburgerIcon}
        h="full"
        fontSize="1.5rem"
        cursor="pointer"
      />
      {/* Mobile */}
      <Flex
        // border="5px solid green"
        zIndex="1111"
        color={navBar ? "#fff" : "#fff"}
        transform={{
          base: isOpen ? "scale(1,1)" : "scale(0,1)",
          md: isOpen ? "scale(1,1)" : "scale(0,1)",
          lg: "scale(0,0)",
          xl: "scale(0,0)",
        }}
        transition="all .3s ease-in-out"
        transformOrigin="left"
        pos="absolute"
        top="0"
        left="0"
        w="full"
        h="100vh"
        bg="#00204a"
        flexDirection="column"
        align="center"
        justify="center"
        gap="2rem"
      >
        <CloseButton
          bg="red"
          fontWeight="bolder"
          pos="absolute"
          top="1rem"
          right="1rem"
          onClick={handleToggleIsOpen}
        />
        <ChakraLink
          onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          to="Home"
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          to="Services"
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          Services
        </ChakraLink>
        <ChakraLink
          onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          to="About"
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          About
        </ChakraLink>
        <ChakraLink
          onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          to="WhyUs"
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          WhyUs
        </ChakraLink>
        <ChakraLink
          onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          to="Team"
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "#00bbf0",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}
        >
          team
        </ChakraLink>
        <ChakraLink
          // onClick={handleToggleIsOpen}
          fontWeight="500"
          as={ScrollLink}
          smooth={true}
          duration={500}
          position="relative"
          _hover={{
            textDecoration: "none", // Remove default underline
            color: "#00bbf0",
          }}
        >
          <Login />
        </ChakraLink>

        <ChakraLink
          fontWeight="500"
          as={ScrollLink}
          smooth={true}
          duration={500}
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "#00bbf0",
          }}
        >
          <Box>
            <Search />
          </Box>
        </ChakraLink>
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
