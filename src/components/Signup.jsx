import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <Center h="100vh">
      <VStack
        spacing={4}
        p={4}
        w="300px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading size="md">Sign Up</Heading>
        <form onSubmit={onSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            isLoading={isLoading}
            colorScheme="blue"
            mt={4}
            w="100%"
          >
            Sign Up
          </Button>
          <FormErrorMessage>{error}</FormErrorMessage>
        </form>
        <Text fontSize="sm" mt={2}>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </Text>
      </VStack>
    </Center>
  );
};

export default Signup;
