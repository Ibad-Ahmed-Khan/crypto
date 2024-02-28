import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Checkbox,
  Text,
  useColorModeValue,
  CloseButton,
} from "@chakra-ui/react";
import { FaSignInAlt, FaEye, FaEyeSlash, FaCross } from "react-icons/fa";

const LoginBox = ({ handleToggleLogin, isLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Your login logic here
    console.log("Logging in...");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formBgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      bg=" rgba(0,0,0, 0.4) "
      minW="100vw"
      minH="100vh"
      pos="fixed"
      left="0"
      top="0"
      onClick={handleToggleLogin}
    >
      <Flex
        pos="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
        align="center"
        justify="center"
        borderRadius="md"
        zIndex="999999999999999999"
        bg={useColorModeValue("gray.100", "gray.900")}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          pos="relative"
          w={{ base: "20rem", md: "25rem", lg: "30rem" }}
          h={{ base: "30rem", md: "28rem", lg: "30rem" }}
          borderRadius="xl"
          bg={formBgColor}
          boxShadow="md"
          p={{ base: 6, md: 8 }}
        >
          <Flex align="center" justify="space-between" mb={8}>
            <Flex align="center">
              <Box
                as={FaSignInAlt}
                boxSize={9}
                color={useColorModeValue("blue.500", "blue.300")}
              />
              <Text fontSize="xl" fontWeight="bold" ml={2}>
                Login
              </Text>
            </Flex>
            <CloseButton onClick={handleToggleLogin} fontWeight="900" />
          </Flex>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                borderRadius="xl"
                borderColor={borderColor}
                _hover={{ borderColor: "gray.300" }}
                _focus={{ borderColor: "blue.400" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Flex align="center">
                <InputGroup>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius="xl"
                    borderColor={borderColor}
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{ borderColor: "blue.400" }}
                  />
                  <InputRightElement>
                    {" "}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={togglePasswordVisibility}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>{" "}
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </FormControl>
            <Flex align="center" gap="1rem">
              <Checkbox
                mb="3px"
                isChecked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                colorScheme="blue"
              ></Checkbox>
              <Text> Remember Me</Text>
            </Flex>

            <Button
              colorScheme="blue"
              onClick={handleLogin}
              borderRadius="xl"
              zIndex="999999999999999999999999"
              _hover={{ bg: "blue.500" }}
            >
              Login
            </Button>
          </Stack>
          <Text mt={4} textAlign="center" fontSize="sm">
            Don't have an account?{" "}
            <Text
              _hover={{ textDecoration: "underline" }}
              as="span"
              color="blue.500"
              fontWeight="bold"
            >
              Sign up
            </Text>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginBox;
