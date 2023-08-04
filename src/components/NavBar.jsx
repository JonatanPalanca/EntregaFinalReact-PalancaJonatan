import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { motion } from "framer-motion";

// Importa los íconos de plataformas de videojuegos
import { SiWindows, SiPlaystation, SiXbox } from "react-icons/si";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <Box bg="blue.600" color="white" py={4} px={8}>
      <Flex alignItems="center">
        {/* Logo */}
        <Box
          mr={4}
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        >
          <Link to="/">
            <Image src="/assets/logo.png" alt="Spark Gamer" h={14} />
          </Link>
        </Box>
        {/* Navigation Links */}
        <Flex flexGrow={1} justifyContent="center" fontSize="18px">
          <NavLink to="/category/1">
            <SiWindows style={{ marginRight: "5px" }} />
            Juegos PC
          </NavLink>
          <NavLink to="/category/2">
            <SiPlaystation style={{ marginRight: "5px" }} />
            Juegos PS5
          </NavLink>
          <NavLink to="/category/3">
            <SiPlaystation style={{ marginRight: "5px" }} />
            Juegos PS4
          </NavLink>
          <NavLink to="/category/4">
            <SiXbox style={{ marginRight: "5px" }} />
            Juegos Xbox
          </NavLink>
        </Flex>
        {/* Cart */}
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
