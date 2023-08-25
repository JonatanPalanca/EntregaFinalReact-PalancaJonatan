import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

const ItemCount = ({
  stock,
  selectedQuantity,
  onQuantityChange,
  addToCart,
}) => {
  const [showAddToCartButton, setShowAddToCartButton] = useState(true);

  const handleAddToCart = () => {
    addToCart();
    if (selectedQuantity >= stock) {
      setShowAddToCartButton(false);
    }
  };

  const handleIncrement = () => {
    if (selectedQuantity < stock) {
      onQuantityChange(selectedQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (selectedQuantity > 1) {
      onQuantityChange(selectedQuantity - 1);
    }
  };

  return (
    <Box>
      <Button onClick={handleDecrement} disabled={selectedQuantity === 1}>
        -
      </Button>
      <Box display="inline-block" mx={2}>
        {selectedQuantity}
      </Box>
      <Button onClick={handleIncrement} disabled={selectedQuantity === stock}>
        +
      </Button>
      {stock > 0 && showAddToCartButton && (
        <Button
          type="button"
          colorScheme="green"
          mr={4}
          onClick={handleAddToCart}
        >
          Agregar al carro
        </Button>
      )}
    </Box>
  );
};

export default ItemCount;
