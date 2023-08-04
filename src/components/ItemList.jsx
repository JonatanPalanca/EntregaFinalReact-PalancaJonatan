import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ItemList = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Item item={item} />
          </Link>
        ))}
      </SimpleGrid>
    </motion.div>
  );
};

export default ItemList;
