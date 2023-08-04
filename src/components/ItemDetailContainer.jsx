import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailPage from "./ItemDetailPage";
import { Box, Text, Center, Spinner } from "@chakra-ui/react";

const mockItems = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 50,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 0,
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 30,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 10,
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 20,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 10,
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Descripción del producto 4",
    price: 70,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 5,
    title: "Producto 5",
    description: "Descripción del producto 5",
    price: 40,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 6,
    title: "Producto 6",
    description: "Descripción del producto 6",
    price: 25,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 7,
    title: "Producto 7",
    description: "Descripción del producto 7",
    price: 50,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 8,
    title: "Producto 8",
    description: "Descripción del producto 2",
    price: 30,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 9,
    title: "Producto 9",
    description: "Descripción del producto 9",
    price: 20,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 10,
    title: "Producto 10",
    description: "Descripción del producto 10",
    price: 70,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
  {
    id: 11,
    title: "Producto 11",
    description: "Descripción del producto 11",
    price: 40,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
  {
    id: 12,
    title: "Producto 12",
    description: "Descripción del producto 12",
    price: 25,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de un llamado asincrónico con retraso de 2 segundos
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const selectedItem = mockItems.find(
            (item) => item.id === parseInt(id)
          );
          resolve(selectedItem);
        }, 2000);
      });
    };

    fetchItem().then((itemData) => setItem(itemData));
  }, [id]);

  return (
    <Box p={4}>
      {item ? (
        <ItemDetailPage item={item} />
      ) : (
        <Center height="200px">
          <Spinner color="teal.500" size="xl" />
        </Center>
      )}
    </Box>
  );
};

export default ItemDetailContainer;
