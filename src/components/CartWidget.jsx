import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "@chakra-ui/react";

const CartWidget = () => {
  const cartItems = 1;
  return (
    <div style={{ position: "relative" }}>
      <FiShoppingCart size={24} />
      {cartItems > 0 && (
        <Badge
          position="absolute"
          top="-12px"
          right="-4px"
          colorScheme="purple"
          borderRadius="full"
          px={1}
        >
          {cartItems}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
