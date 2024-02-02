import React, { useContext } from "react";

import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  //Metemos console.log de forma momentanea para ver que se está actualizando correctamente.

  console.log(carrito);
  console.log("Monto total de la compra: ", total);
  console.log("Cantidad de items: ", cantidadTotal);

  // Función para agregar productos al carrito

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  // Función para eliminar productos del carrito

  const eliminarProducto = (id) => {
    // Guardo una referencia del producto que borraré
    const productoEliminado = carrito.find((prod) => prod.item.id === id);

    //Ahora lo elimino del carrito
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);

    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };

  //Función para vaciar el carrito de compras:

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  // Usamos el value para enviar el valor del carrito, total, cantidadTotaly las funciones:

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );

  // Le tenemos que agregar el children, que es una propiedad especial que utilizamos para representar a todos los componentes que puedan necesitar el carrito y sus funciones.
};
