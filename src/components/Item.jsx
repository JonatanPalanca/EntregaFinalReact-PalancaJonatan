import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Box p={4} shadow="md" borderWidth="2px" borderRadius="md">
      <Link to={`/item/${item.id}`}>
        <Image src={item.image} alt={item.title} h={200} objectFit="cover" />
        <Heading size="md" mt={2} mb={1}>
          {item.title}
        </Heading>
        <Text color="gray.600">
          {item.description.length > 90
            ? `${item.description.substring(0, 90)}...`
            : item.description}
        </Text>
        <Text fontWeight="bold" mt={2}>
          $ {item.price}
        </Text>
        <Button colorScheme="teal" mt={4}>
          Ver detalle
        </Button>
      </Link>
    </Box>
  );
};

export default Item;
