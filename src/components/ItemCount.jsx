import React from "react";
import { Box, Button } from "@chakra-ui/react";

const ItemCount = ({ stock, selectedQuantity, onQuantityChange }) => {
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
    </Box>
  );
};

export default ItemCount;
