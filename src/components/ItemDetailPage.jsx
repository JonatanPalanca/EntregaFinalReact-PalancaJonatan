import React, { useState } from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { useCartContext } from "../CartContext";
import { motion } from "framer-motion";
import ItemCount from "./ItemCount";

const ItemDetailPage = ({ item }) => {
  const { addToCart } = useCartContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleAddToCart = () => {
    addToCart(item, selectedQuantity);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          {item.title}
        </Heading>
        <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Text fontSize="xl">{item.description}</Text>
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            $ {item.price}
          </Text>
          <ItemCount
            stock={item.stock}
            selectedQuantity={selectedQuantity}
            onQuantityChange={handleQuantityChange}
          />
          <Button onClick={handleAddToCart} colorScheme="teal" mt={4}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ItemDetailPage;
