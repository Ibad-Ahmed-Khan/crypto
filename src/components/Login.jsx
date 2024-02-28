import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import LoginBox from "./LoginBox";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleToggleLogin = (e) => {
    console.log(e);
    setIsLogin(!isLogin);
  };

  if (isLogin) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <Box>
      <Flex pos="relative" align="center" justify="center" gap=".4rem" w="full">
        <Box as={FaSignInAlt} />
        <Text onClick={handleToggleLogin}>Login </Text>
      </Flex>
      {isLogin && (
        <>
          <LoginBox handleToggleLogin={handleToggleLogin} isLogin={isLogin} />
        </>
      )}
      {/* <Text>Astaghfirullah</Text> */}
    </Box>
  );
};

export default Login;
