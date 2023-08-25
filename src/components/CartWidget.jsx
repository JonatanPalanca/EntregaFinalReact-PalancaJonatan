import React, { useState, useEffect } from "react";
import { Box, Button, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { auth } from "../main";
import Form from "./Form";

const CartWidget = () => {
  const navigate = useNavigate();
  const { cart, clearCart, removeFromCart } = useCartContext();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId, cart.find((item) => item.id === itemId).quantity);
  };

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleBuyProducts = () => {
    setShowForm(true);
  };

  const handleConfirmPurchase = () => {
    setShowForm(false);
    clearCart();
    navigate("/");
  };

  return (
    <Box p={4} bg="gray.100">
      {showForm ? (
        <Form onConfirm={handleConfirmPurchase} />
      ) : (
        <Box>
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
                <ProductCartItem
                  key={item.id}
                  item={item}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}
              <Flex justifyContent="space-between">
                <Button
                  type="button"
                  onClick={handleBuyProducts}
                  colorScheme="green"
                  mr={4}
                >
                  Comprar productos
                </Button>
                <Button onClick={clearCart} colorScheme="red">
                  Vaciar carro
                </Button>
              </Flex>
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
                  {`Total: $${total.toFixed(2)}`}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

const ProductCartItem = ({ item, onRemove }) => (
  <Flex
    key={item.id}
    mb={4}
    borderWidth="1px"
    borderRadius="md"
    p={4}
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex alignItems="center">
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          boxSize={100}
          objectFit="cover"
        />
      )}
      <Text fontSize="lg" fontWeight="bold" color="black" ml={4}>
        {item.title}
      </Text>
    </Flex>
    <Flex alignItems="center">
      <Text fontSize="lg" fontWeight="bold" color="black">
        {`Cantidad: ${item.quantity}`}
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="black" ml={4}>
        {`Precio: $${item.price}`}
      </Text>
      <Button onClick={onRemove} ml={4}>
        Eliminar
      </Button>
    </Flex>
  </Flex>
);

export default CartWidget;
