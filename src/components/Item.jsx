import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      {" "}
      {/* Agregamos el enlace a la página de detalles */}
      <Box p={4} shadow="md" borderWidth="2px" borderRadius="md">
        <Image
          src={item.pictureUrl}
          alt={item.title}
          h={200}
          objectFit="cover"
        />
        <Heading size="md" mt={2} mb={1}>
          {item.title}
        </Heading>
        <Text color="gray.600">{item.description}</Text>
        <Text fontWeight="bold" mt={2}>
          $ {item.price}
        </Text>
      </Box>
    </Link>
  );
};

export default Item;
