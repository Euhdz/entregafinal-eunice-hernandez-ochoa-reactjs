const productos = [
  {
    id: 1,
    nombre: "Pollo en salsa verde",
    descripcion: "Paquete de 5 tamales con pollo en salsa verde con cilantro",
    precio: 100,
    img: "./img/tamalverde.jpeg",
  },
  {
    id: 2,
    nombre: "Pollo con mole",
    descripcion: "Paquete de 5 tamales con pollo en mole poblano",
    precio: 100,
    img: "./img/tamalmole.jpg",
  },
  {
    id: 3,
    nombre: "Rajas con queso",
    descripcion:
      "Paquete de 5 tamales con rajas de jalapeño, queso manchego y salsa roja",
    precio: 110,
    img: "./img/tamalrajas.jpg",
  },
  {
    id: 4,
    nombre: "Cerdo en chile rojo",
    descripcion:
      "Paquete de 5 tamales con carne de cerdo en adobo de chile rojo",
    precio: 90,
    img: "./img/tamalrojo.jpg",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 2000);
  });
};
