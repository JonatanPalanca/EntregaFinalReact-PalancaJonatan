import Swal from "sweetalert2";

export const showStockErrorMessage = () => {
  Swal.fire({
    icon: "error",
    title: "Producto sin stock",
    text: "Lo sentimos, este producto no está disponible en stock en este momento.",
  });
};
