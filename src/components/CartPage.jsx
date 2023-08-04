import React from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart, removeFromCart, addToCart } = useCartContext();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncreaseQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item.stock > item.quantity) {
      addToCart(item, 1);
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item.quantity > 1) {
      removeFromCart(item.id, 1);
    }
  };

  const handleBuyProducts = () => {
    cart.forEach((item) => {
      if (item.quantity > item.stock) {
        removeFromCart(item.id, item.quantity - item.stock);
      }
    });
    // Lógica de pago y compra aquí...
    // Después de la compra, puedes vaciar el carrito utilizando "clearCart"
    clearCart();
  };

  return (
    <Box p={4} bg="gray.100">
      <Heading as="h1" size="xl" mb={4} color="teal.600">
        Carro de compras
      </Heading>
      {cart.length === 0 ? (
        <Box>
          <Text fontSize="lg" color="gray.600">
            Tu carrito está vacío.
          </Text>
          <Flex justifyContent="center" mt={4}>
            <Button
              colorScheme="teal"
              width="100%"
              color="white"
              bg="teal.500"
              onClick={() => navigate("/")}
            >
              Volver a la tienda
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box>
          {cart.map((item) => (
            <Box key={item.id} mb={4} borderWidth="1px" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="md" color="gray.600">
                Precio: ${item.price}
              </Text>
              <Text fontSize="md" color="gray.600">
                Cantidad: {item.quantity}
              </Text>
              <Button onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
              <Button onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
            </Box>
          ))}
          <Button onClick={handleBuyProducts} colorScheme="green" mr={4}>
            Comprar productos
          </Button>
          <Button onClick={clearCart} colorScheme="red">
            Vaciar carro
          </Button>
          <Flex justifyContent="center" mt={4}>
            <Button
              colorScheme="teal"
              width="100%"
              color="white"
              bg="teal.500"
              onClick={() => navigate("/")}
            >
              Volver a la tienda
            </Button>
          </Flex>
          <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
