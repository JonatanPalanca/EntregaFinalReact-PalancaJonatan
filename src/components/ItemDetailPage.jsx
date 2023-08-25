import React, { useState } from "react";
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { useCartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { showStockErrorMessage } from "./utils";
import ItemCount from "./ItemCount";

const ItemDetailPage = ({ item }) => {
  const { addToCart } = useCartContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const showItemCount = item.stock > 0;
  if (item.stock === 0) {
    showStockErrorMessage();
  }
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
          <Image src={item.image} alt={item.title} maxH="300px" mb={4} />
          <Text fontSize="xl">{item.description}</Text>
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            $ {item.price}
          </Text>
          {showItemCount && (
            <ItemCount
              stock={item.stock}
              selectedQuantity={selectedQuantity}
              onQuantityChange={handleQuantityChange}
              addToCart={handleAddToCart}
            />
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default ItemDetailPage;
