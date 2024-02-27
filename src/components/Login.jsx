import { Box, Flex, Text } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  return (
    <Flex align="center" justify="center" gap=".4rem">
      <Box as={FaSignInAlt} />
      <Text>Login</Text>
    </Flex>
  );
};

export default Login;
