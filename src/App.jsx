import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import CartWidget from "./components/CartWidget";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartContextProvider>
          {" "}
          <div>
            <NavBar />
            <Routes>
              {/* Rutas */}
              <Route exact path="/" element={<ItemListContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                exact
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<CartWidget />} />
            </Routes>
          </div>
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
