import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box p={4} bg="gray.200" borderRadius="md" boxShadow="md">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        fontFamily="fantasy"
        color="purple.600"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
      >
        {greeting}
        <br />
        <Text fontSize="2xl" fontWeight="normal" color="gray.600">
          Compra juegos digitales de forma fácil y segura.
        </Text>
      </Text>
    </Box>
  );
};

export default ItemListContainer;
