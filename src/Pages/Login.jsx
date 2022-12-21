import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { postLogin } from "../Utils/loginSubmit";

const Login = () => {
  /* states to handle the form data */
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  /* function to handle the form submission */
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await postLogin({ username, password });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setLoading(false);
      } else {
        localStorage.setItem("token", data.token);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minH="30rem"
      border={"1px solid black"}
    >
      <FormControl isRequired maxWidth={{ lg: "40%" }}>
        <Heading mb="2rem">
          <Center>Login</Center>
        </Heading>
        <FormLabel>UserName</FormLabel>
        <Input
          type="text"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <Button
          display={"block"}
          m="auto"
          mt="2rem"
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
