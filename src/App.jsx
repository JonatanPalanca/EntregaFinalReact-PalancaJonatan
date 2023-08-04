import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./components/CartPage";
import { CartContextProvider } from "./CartContext";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartContextProvider>
          {" "}
          {/* Agregamos el proveedor del contexto */}
          <div>
            <NavBar />
            <Routes>
              {/* Rutas */}
              <Route
                exact
                path="/"
                element={<ItemListContainer greeting="Bienvenido" />}
              />
              <Route
                exact
                path="/category/:id"
                element={<ItemListContainer greeting="Bienvenido" />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
