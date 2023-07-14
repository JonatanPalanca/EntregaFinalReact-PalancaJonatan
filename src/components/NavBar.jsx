import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const gradient = "linear-gradient(45deg, #00FFFF, #00CCFF, #0066FF, #8A2BE2)";
  const textColor = ["#00FFFF", "#00CCFF", "#0066FF", "#8A2BE2"];
  const boxColor = "#131630";

  return (
    <Box bg={boxColor} color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Text fontFamily="Inter" fontWeight="bold" fontSize="3xl">
          <span style={{ color: textColor[0] }}>S</span>
          <span style={{ color: textColor[1] }}>p</span>
          <span style={{ color: textColor[2] }}>a</span>
          <span style={{ color: textColor[3] }}>r</span>
          <span style={{ color: textColor[3] }}>k </span>
          <span style={{ color: textColor[0] }}>G</span>
          <span style={{ color: textColor[1] }}>a</span>
          <span style={{ color: textColor[2] }}>m</span>
          <span style={{ color: textColor[3] }}>e</span>
          <span style={{ color: textColor[3] }}>r</span>
        </Text>
        <Flex>
          <Link mx={2} fontSize="sm" fontWeight="bold" color="white" href="#">
            Juegos PC
          </Link>
          <Link mx={2} fontSize="sm" fontWeight="bold" color="white" href="#">
            Juegos PS5
          </Link>
          <Link mx={2} fontSize="sm" fontWeight="bold" color="white" href="#">
            Juegos PS4
          </Link>
          <Link mx={2} fontSize="sm" fontWeight="bold" color="white" href="#">
            Juegos Xbox
          </Link>
          <CartWidget />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
