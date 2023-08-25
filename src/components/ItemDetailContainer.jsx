import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetailPage from "./ItemDetailPage";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "Items", id);

    getDoc(itemRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setItem({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        setLoading(false);
      });
  }, [id]);

  const renderContent = () => {
    if (loading) {
      return (
        <Center height="200px">
          <Spinner color="teal.500" size="xl" />
        </Center>
      );
    }

    if (!item) {
      return <Center height="200px">Item not found.</Center>;
    }

    return <ItemDetailPage item={item} />;
  };

  return <Box p={4}>{renderContent()}</Box>;
};

export default ItemDetailContainer;
