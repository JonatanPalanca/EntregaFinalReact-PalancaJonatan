import React, { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useCartContext } from "../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { cart, clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    document: "",
    address: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.document !== "" &&
      formData.address !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      /^\d+$/.test(formData.document) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    );
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const order = {
        buyer: {
          name: formData.firstName + " " + formData.lastName,
          phone: formData.phone,
          email: formData.email,
          document: formData.document,
          address: formData.address,
        },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
        date: new Date().toISOString(),
        total: cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

      try {
        const db = getFirestore();
        const ordersCollectionRef = collection(db, "orders");
        const docRef = await addDoc(ordersCollectionRef, order);

        const newOrderId = docRef.id;
        clearCart();
        setOrderId(newOrderId);
        setShowAlert({
          title: "¡Compra confirmada!",
          text: `Su compra ha sido confirmada. Número de orden: ${newOrderId}`,
        });
      } catch (error) {
        console.error("Error al agregar la orden:", error);
      }
    } else {
      setShowAlert({
        title: "Error",
        text: "Por favor, complete todos los campos correctamente.",
      });
    }
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    setFormData({
      firstName: "",
      lastName: "",
      document: "",
      address: "",
      email: "",
      phone: "",
    });
    navigate("/");
  };

  return (
    <VStack spacing={4}>
      <form>
        <Heading size="md" mb={4}>
          Complete los detalles de compra
        </Heading>
        <FormControl>
          <FormLabel htmlFor="firstName">Nombre:</FormLabel>
          <Input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName">Apellido:</FormLabel>
          <Input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="document">Documento:</FormLabel>
          <Input
            type="text"
            name="document"
            placeholder="Documento"
            value={formData.document}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="address">Dirección:</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Correo electrónico:</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Telefono:</FormLabel>
          <Input
            type="text"
            name="phone"
            placeholder="Telefono"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <Button type="button" colorScheme="green" mt={4} onClick={handleSubmit}>
          Confirmar compra
        </Button>
      </form>
      {showAlert && typeof showAlert === "object" && (
        <SweetAlert
          danger
          title={showAlert.title}
          onConfirm={() => setShowAlert(null)}
        >
          {showAlert.text}
        </SweetAlert>
      )}

      {showAlert && showAlert.title === "¡Compra confirmada!" && (
        <SweetAlert
          success
          title={showAlert.title}
          onConfirm={handleAlertConfirm}
        >
          {showAlert.text}
        </SweetAlert>
      )}
    </VStack>
  );
};

export default Form;
