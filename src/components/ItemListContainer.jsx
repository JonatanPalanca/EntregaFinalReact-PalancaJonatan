import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    let q = query(itemsCollection);

    if (categoryId) {
      q = query(itemsCollection, where("categoryId", "==", categoryId));
    }

    getDocs(q)
      .then((querySnapshot) => {
        const itemData = [];
        querySnapshot.forEach((doc) => {
          itemData.push({ id: doc.id, ...doc.data() });
        });
        setItems(itemData);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, [categoryId]);

  return (
    <Box>
      <ItemList items={items} />
    </Box>
  );
};

export default ItemListContainer;
