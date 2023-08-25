import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4vr-klO-s_V4yqThfuk5VYJAFG9_-CgQ",
  authDomain: "reactpalancajonatan.firebaseapp.com",
  projectId: "reactpalancajonatan",
  storageBucket: "reactpalancajonatan.appspot.com",
  messagingSenderId: "452578996912",
  appId: "1:452578996912:web:7b37672fe7aacc4a154175",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const root = document.getElementById("root");
createRoot(root).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
