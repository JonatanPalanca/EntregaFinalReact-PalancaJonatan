import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(Boolean(isLoggedInLocalStorage));

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Usuario Logueado",
          text: "Has iniciado sesión correctamente.",
        });
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      })
      .catch((error) => {
        setError("Email or password is incorrect");
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Usuario Deslogueado",
          text: "Has cerrado sesión correctamente.",
        });
      })
      .catch((error) => {});
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
        <Heading size="md">
          {isLoggedIn ? `¡Bienvenido, ${user ? user.email : ""}!` : "Login"}
        </Heading>
        {isLoggedIn ? (
          <div>
            <Button onClick={handleLogout} colorScheme="red" mt={4} w="100%">
              Logout
            </Button>
          </div>
        ) : (
          <form onSubmit={onLogin}>
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
            <Button type="submit" colorScheme="blue" mt={4} w="100%">
              Login
            </Button>
            {error && <Text color="red">{error}</Text>}
            <Text fontSize="sm" mt={2}>
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </Text>
          </form>
        )}
      </VStack>
    </Center>
  );
};

export default Login;
