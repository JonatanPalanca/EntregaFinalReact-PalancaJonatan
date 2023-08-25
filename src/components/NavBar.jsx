import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { motion } from "framer-motion";

import { SiWindows, SiPlaystation, SiXbox } from "react-icons/si";

const NavBar = () => {
  const { cart } = useCartContext();

  const generateCategoryLink = (category) => `/category/${category}`;

  return (
    <Box bg="blue.600" color="white" py={4} px={8}>
      <Flex alignItems="center">
        <Box
          mr={4}
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        >
          <Link to="/">
            <Image src="/assets/logo.png" alt="Spark Gamer" h={14} />
          </Link>
        </Box>
        <Flex flexGrow={1} justifyContent="center" fontSize="18px">
          <NavLink to={generateCategoryLink("PC")}>
            <SiWindows style={{ marginRight: "5px" }} />
            Juegos PC
          </NavLink>
          <NavLink to={generateCategoryLink("PS5")}>
            <SiPlaystation style={{ marginRight: "5px" }} />
            Juegos PS5
          </NavLink>
          <NavLink to={generateCategoryLink("PS4")}>
            <SiPlaystation style={{ marginRight: "5px" }} />
            Juegos PS4
          </NavLink>
          <NavLink to={generateCategoryLink("Xbox")}>
            <SiXbox style={{ marginRight: "5px" }} />
            Juegos Xbox-One
          </NavLink>
        </Flex>
        <NavLink to="/login" position="relative">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.8 }}
          >
            <FiUser size={30} color="white" />
          </motion.div>
        </NavLink>
        <NavLink to="/cart" position="relative">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.8 }}
          >
            <FiShoppingCart size={30} color="white" />
          </motion.div>
          {cart.length > 0 && (
            <Box
              position="absolute"
              top="14px"
              right="26px"
              bg="red.500"
              color="white"
              borderRadius="full"
              padding="1px 8px"
              fontSize="12px"
              fontWeight="bold"
            >
              {cart.length}
            </Box>
          )}
        </NavLink>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children, ...rest }) => {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        margin: "0 16px",
        fontWeight: "bold",
        color: "white",
        textDecoration: "none",
        fontFamily: "Arial, sans-serif",
        textTransform: "uppercase",
        letterSpacing: "1px",
        transition: "color 0.3s",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavBar;
